function validate() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "") {
        document.getElementById("emailMessage").innerHTML = "Please Enter Valid Email ID"
    }
    if (password == "") {
        document.getElementById('passwordMessage').innerHTML = "Please Enter Passwrod"
    }
    return false

}