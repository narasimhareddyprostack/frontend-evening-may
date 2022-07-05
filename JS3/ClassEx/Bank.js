class Bank {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited successfully")
    }
    get_Bal() {
        console.log("Your Balance Very low, do hardwork")
    }
}

let c1 = new Bank()
console.log(c1.min_Bal)
c1.open_Account()
c1.deposit_Amount()
c1.get_Bal()