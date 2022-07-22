let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(emp)
            let flag = true
            flag ? resolve("Success") : reject("Failure")
        }, 4000);
    });
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows = rows + `<tr>
                          <td> ${employee.id}</td>
                          <td> ${employee.name}</td>
                          <td> ${employee.sal}</td>
                            </tr>`
        });
        document.getElementById("tbody_Data").innerHTML = rows
    }, 1000)
}


let exec = async () => {
    await createEmployee({ id: 103, name: "Priyanka", sal: 650000 })
    getEmployees()
}
exec();