function display() {
    let emp = { id: 101, name: "Rahul Gandhi", sal: 45000, email: "Rahul@oracle.com" }
    for (key in emp) {
        //console.log(key)
        console.log(emp[key])
    }
    //alert(JSON.stringify(emp))
}
display()


