let employee = {
    id: 101, name: "Rahul", sal: 45000,
    details: { login_Id: 'TCS101', email: "rahul@tcs.com" },
    loc: ['Wayanad', 'New Delhi']
}

console.log(employee.id)  // 101
console.log(employee.details.login_Id) // 'TCS101' 

let { id, details } = employee;
console.log(id)
console.log(details.login_Id)
