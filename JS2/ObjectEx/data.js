//what is object?
//group of data and functionality
let employee = {
    id: 101,
    name: "Rahul Gandhi",
    loc: ["Banagalore", "Noida"],
    email: undefined,
    details: function () {
        console.log("Hello,Good Evening......")
    }
}
console.log(Object.keys(employee).length)
console.log(employee.id)
console.log(employee.sal)
employee.details()
employee.getName()