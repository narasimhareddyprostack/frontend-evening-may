let user = {
    id: 101,
    name: "Rahul",
    email: 'rahul@gmail.com'
}
let details = {
    email: "rahul@tcs.com",
    sal: 45000,
    loc: "Bangalore"
}

let user_Details = { ...user, ...details }
console.log(user_Details)