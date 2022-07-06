class Bank {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(x) {
        console.log(x, " Amount Deposited Successfully!")
    }
    get_Balace() {
        return this.min_Bal
    }
}
let c1 = new Bank()
c1.open_Account()
c1.deposit_Amount(15000)
c1.get_Balace()