let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp, callback) => {
    //insert data will take time comparing to fetch
    //setTimeout(1,2)
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 4000)
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.sal}</td>
            </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)

}
createEmployee({ id: 103, name: "Priyanka", sal: 65000 }, getEmployees)   //4 sec
                                           //1 sec