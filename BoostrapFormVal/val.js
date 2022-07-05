function validate() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email == "") {
        document.getElementById('emailMessage').innerHTML = "Please Enter Email Id"
    }
    if (password == "") {
        document.getElementById("passwordMessage").innerHTML = "Please Enter Password"
    }
    return false
}