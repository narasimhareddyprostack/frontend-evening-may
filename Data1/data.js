let employees = [
    { id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 },
    { id: 103, name: "Priyanka", sal: 65000 },
    { id: 104, name: "Modi", sal: 75000 }
]
function display_Data() {
    let rows = ""
    for (let i = 0; i <= employees.length - 1; i++) {
        rows = rows + `<tr> 
                                <td> ${employees[i].id} </td>
                                <td> ${employees[i].name} </td>
                                <td> ${employees[i].sal} </td>
                        </tr>`
    }
    document.getElementById('table_Data').innerHTML = rows
}