function CreateAccount() {
    var mail = document.getElementById("email").value;
    var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("cpass").value;

    if ((mail.length == 0) || (first.length == 0) || (last.length == 0) || (password.length == 0) || (confirm.length == 0)) {
        alert("Please fill the required area correctly");
    } else {
        alert("You're registered");
        window.location.href = "signIn.html";
    }
}
function show() {
        var box1 = document.getElementById("drop");

        box1.style.display = "block"



    }
    function showalter() {
        var box1 = document.getElementById("drop");

        box1.style.display = "none"

    }
function sign_In() {
    window.location.href = "signIn.html"
}