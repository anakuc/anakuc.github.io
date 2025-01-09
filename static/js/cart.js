   //my script, it rocks
   //this function is responsible for handling of adding items to cart by taking the id from the input
   //then posting to the endpoint which will be added to the in memory cart map class

   function init(productId) {
    var inputQuantityId = "inputQuantity_".concat(productId)
    var quantity = document.getElementById(inputQuantityId).value;

    fetch("add_to_cart", {
        method: "POST",
        body: JSON.stringify({
            addToCart: {
                productId: productId,
                quantity: quantity
            }
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => {

            alert("this product has been added to cart");
        })
}