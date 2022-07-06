class Employee {
    eid;
    ename;
    constructor(a, b) {
        this.eid = a
        this.ename = b
    }
    get_Details() {
        console.log(this.eid, "and", this.ename)
    }
}
let e1 = new Employee(101, "Rahul Gandhi")
let e2 = new Employee(102, "Sonia Gandhi")
//console.log(e1)
//console.log(e2)
e1.get_Details()
e2.get_Details()