class Account {
    min_Bal = 500
    set_Address() {
        console.log("Address updated")
    }
    get_Address() {
        console.log("Address Displaying")
    }
}
class Savings_Account extends Account {
    get_Bal() {
        console.log("Your Balance low")
    }
}
let c1 = new Savings_Account()
console.log(c1)
c1.set_Address()
c1.get_Address()
c1.get_Bal()