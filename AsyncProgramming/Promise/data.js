let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmplyee = (emp) => {
    return new Promise((resolve, reject) => {
        //4 sec time
        setTimeout(() => {
            let flag = true
            employees.push(emp)
            flag ? resolve("Inserted Data Successfully") : reject("Failed")
        }, 4000)
    })
}

let getEmployees = () => {

    let rows = ""
    setTimeout(() => {

        employees.forEach((employee) => {

            rows = rows + `<tr>
                <td> ${employee.id}</td>
                <td> ${employee.name}</td>
                <td> ${employee.sal}</td>
            </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)


}
createEmplyee({ id: 103, name: "Priynaka", sal: 65000 }).then((msg) => {
    getEmployees()
    console.log(msg)
}).catch((err) => {
    console.log(err)
})