class Account {
    constructor(r, n) {
        this.acc_id = r
        this.acc_Name = n
    }
}
class Savings_Account extends Account {
    constructor(a, b, c, d, e) {
        super(a, b)
        this.email = c
        this.city = d
        this.type = e
    }
}


let s1 = new Savings_Account(101, "Rahul Gandhi", 'rh@gmail.com', 'Wayanad', 'Savings')
console.log(s1)