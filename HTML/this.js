// The JS this keyword refers to the obj its belongs to .



const user = {
    productName: "iphone 16",
    price: 90000,
     details: {
        welcomeMessge:  function(){
        console.log(`${this.productName}, welcome to apple store`);
        console.log(`${this.price},this is the current price`); 
    }
      }, 
}
user.details.welcomeMessge()
user.productName = "iphone 17 Pro"
user.price = "120000"
user.welcomeMessge()

//console.log(this);
