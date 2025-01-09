// Initialize an array to store user cart items
//This class is responsibe for handling the cart items with addition and removal

const cartItems = new Map();
var orderTotal = {

}

// Function to create a new user and store it in the users array
function addCartItem(productId, quantity) {
    item = cartItems.get(productId);


    //check if cart item exists,
    //if it does, increment the value that was added
    if (typeof item !== "undefined") {
        console.log("old quantity");
        console.log(item.quantity);
        const newQuantity = Number(item.quantity) + Number(quantity);

        console.log("new quantity");
        item.quantity = newQuantity

    } else {
        cartItems.set(
            productId,
            {
                quantity: quantity
            });
    }

    console.log(cartItems); // Log the current state of the users array
}


//simply remove the key which matches the productId
function removeCartItem(productId) {
    cartItems.delete(productId);

}

function getCartItems() {
    return cartItems;
}

function addOrderTotals(orderTotal){
    orderTotal = orderTotal;
}

function getOrderTotals(){
    return orderTotal;
}

// Export the createUser and authenticateUser functions for use in other modules
module.exports = { addCartItem, getCartItems, removeCartItem, addOrderTotals, getOrderTotals};
