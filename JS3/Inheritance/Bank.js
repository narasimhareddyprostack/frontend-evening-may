class Account {
    get_Addreess() {
        return "Marathahalli, Bangalore"
    }
}
class Saving_Account extends Account { }
class Current_Account extends Account { }

let c1 = new Saving_Account()
let c2 = new Current_Account()
console.log(c1.get_Addreess())
console.log(c2.get_Addreess())