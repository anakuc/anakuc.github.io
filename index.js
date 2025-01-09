// Import required modules
const express = require('express'); // Express for Node.js
const app = express(); // Create an Express application
const bodyParser = require('body-parser'); // Body Parser to parse requests
const session = require('express-session'); // Express Session for user sessions

// Configure app to use bodyParser middleware for handling form data
app.use(bodyParser.urlencoded({ extended: true }));

//use json with bodyparser
app.use(bodyParser.json())

// Set EJS as the view engine for rendering pages
app.set("view engine", "ejs");
app.set('views', 'views');

// Server static files form the public directory
app.use(express.static("static"));

//Import Authentication Module
const auth = require('./auth.js')

//Import CartItems Module
const cart = require('./cart.js')

// Create a user for authentication
auth.createUser("user", "pass");

// Test the authentication function
console.log(auth.authenticateUser("user", "pass"));

// Session middleware configuration
//by providing a secret we somewhat help mitigate session hijacking
//https://en.wikipedia.org/wiki/Session_hijacking
app.use(session({
  secret: 'XSW5@£1DFGWEQ34251SA', // Secret key for session ID cookie
  resave: false, // Doesn't save session if not modified
  saveUninitialized: true // Saves uninitialized session
}));

//Connect to database:
const mysql = require('mysql2');
//Create a connection to the G00439362 database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'G00439362'
});

// Connect to the G00439362 database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to G00439362 database: ', err);
  } else {
    console.log('Connected to database!');
  }
});

//=========================================================================
//POST

app.post('/add_to_cart', (req, res) => {
  const addToCartInput = req.body.addToCart;

  cart.addCartItem(addToCartInput.productId, addToCartInput.quantity);


  res.status(200).send('Successfully added cart item');
});

app.delete('/remove_from_cart', (req, res) => {
  const productId = req.body.productId;

  cart.removeCartItem(productId);


  res.status(200).send('Successfully removed cart item');
});

app.get('/carts', (req, res) => {
  cartItems = cart.getCartItems();
  console.log(cartItems);



  res.status(200).send('Successfully subscribed to newsletter');
});


//=========================================================================

// Route to handle Newsletter form submission
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Check if email field is empty
  if (!email) {
    return res.status(400).send('Email is required');
  }

  // If email field is not empty, proceed with database insertion
  connection.query('INSERT INTO subscribers (email) VALUES (?)', [email], (err, result) => {
    if (err) {
      console.error('Error subscribing to newsletter:', err);
      return res.status(500).send('Error subscribing to newsletter');
    }
    return res.status(200).send('success');
  });
});


//Route to render the home page
app.get("/home", function (req, res) {
  res.render("home.ejs", {activeUser: true});
})

// Route to render the index page
app.get("/", function (req, res) {

  obj = {
    activeUser: isLoggedIn(req,res)
  }
  res.render("index.ejs", obj);
})

// Route to handle login form submission
app.post("/login", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const authenticated = auth.authenticateUser(username, password);
  console.log(authenticated);

  // Check if authentication is successful
  if (authenticated) {
    obj = {
      orderTotal: cart.getOrderTotals,
      activeUser: true
    }
    req.session.isLoggedIn = true;
    res.render("checkout", obj); // Render the home page if authenticated
  } else {
    res.status(401).send('Invalid username or password'); // Send a 401 error if authentication fails
  }
});

// Route to handle login form submission
app.get("/logout", function (req, res, next) {
  req.session.isLoggedIn = false;
  res.status(200).send()
  next();
});


//Route to show products in the Things To Do category/page
app.get("/cart", function (req, res) {

  connection.query('SELECT * FROM productData', function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      // Send the products to view

      var subTotal = 0;
      const PROCESSING_FEE = 5;

      //here we calculate the total and connect up the product id and quantity
      // together from the response of the databse we get data so we can render the cart page correctly.
      cartItems = cart.getCartItems();
      for (var [productId, value] of cartItems) {
        console.log(productId)
        console.log(value)
        console.log(value.quantity)

        for (let product of result) {
          console.log(product);

          if (productId == product.Product_ID) {
            value.product = product;

            //now calculate the total of the item, price * quantity
            //append the total value into the cartItem map
            total = Number(product.Price) * value.quantity
            value.total = total;
            subTotal = Number(subTotal) + Number(total);

          }
        }
      }
      console.log(cartItems);


      cartOrder= {
        subTotal: subTotal,
        fees: PROCESSING_FEE,
        discount: 0,
        total: (subTotal + PROCESSING_FEE)
      } 
      cart.addOrderTotals(cartOrder)

      obj = {
        activeUser: isLoggedIn(req,res),
        cartItems: cartItems,
        cartOrder: cartOrder
      };
      res.render('cart', obj); // Render the thingstodo.ejs template with the product data
    }
  });
});

//https://stackoverflow.com/a/14224967/10908060

//Express dealing with req.session option
//https://stackoverflow.com/questions/26531143/sessions-wont-save-in-node-js-without-req-session-save

//Express sessions
//https://stackoverflow.com/questions/14218725/working-with-sessions-in-express-js
function restrict(req, res, next) {
  if (req.session.isLoggedIn) {
    console.log(req.session.isLoggedIn);
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login.html');
  }
}

function isLoggedIn(req,res){
  console.log(req.session.isLoggedIn);
  return req.session.isLoggedIn;
}

//Route to show products in the Things To Do category/page
app.get("/checkout",restrict, function (req, res) {
  obj = {
    orderTotal: cart.getOrderTotals,
    activeUser: isLoggedIn(req,res)
  };
    return res.render('checkout', obj);
  //check if user is authenticated
});



//Route to show products in the Things To Do category/page
app.get("/thingstodo", function (req, res) {

  connection.query('SELECT * FROM productData where Category = "Things To Do" ', function (err, result) {
    if (err) {
      throw err;
    } else {
      // Send the products to view
      obj = {
        activeUser: isLoggedIn(req,res),
        products: result,
        activeUser: isLoggedIn(req,res)
      };
      res.render('thingstodo', obj); // Render the thingstodo.ejs template with the product data
    }
  });
});

// Route to show products in the "Food & Drink" category/page
app.get("/foodndrink", function (req, res) {

  connection.query('SELECT * FROM productData where Category = "Food & Drink" ', function (err, result) {
    if (err) {
      throw err;
    } else {
      // Send the products to view
      obj = {
        activeUser: isLoggedIn(req,res),
        products: result
      };
      res.render('foodndrink', obj); // Render the foodndrink.ejs template with the product data
    }
  });
});

// Route to show products in the "Beauty & Spas" category/page
app.get("/beautynspas", function (req, res) {

  connection.query('SELECT * FROM productData where Category = "Beauty & Spas" ', function (err, result) {
    if (err) {
      throw err;
    } else {
      // Send the products to view
      obj = {
        activeUser: isLoggedIn(req,res),
        products: result
      };
      res.render('beautynspas', obj); // Render the beautynspas.ejs template with the product data
    }
  });
});

// Route to show products in the "Hotels & Travel" category/page
app.get("/hotelsntravel", function (req, res) {

  connection.query('SELECT * FROM productData where Category = "Hotels & Travel" ', function (err, result) {
    if (err) {
      throw err;
    } else {
      // Send the products to view
      obj = {
        activeUser: isLoggedIn(req,res),
        products: result
      };
      res.render('hotelsntravel', obj); // Render the hotelsntravel.ejs template with the product data
    }
  });
});


//Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
