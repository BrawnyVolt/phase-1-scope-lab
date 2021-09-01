var customerName = "bob"
const leastFavoriteCustomer = "something"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}
console.log(bestCustomer)

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = leastFavoriteCustomer + "tim"
}