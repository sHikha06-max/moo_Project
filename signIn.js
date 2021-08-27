function register() {
    window.location.href = "register.html";
}





function home() {
    var pass = document.getElementById("password").value;
    var mail = document.getElementById("email").value;
    
    if ((pass.length == 0) || (mail.length == 0)) {
        alert("Please enter valid password or email");
    }
    else {
        alert("You're Logged in");
        //   document.location.href = 'home.html',true;

         window.location.href = "home.html"; 
    }
    
}

 function sign_In() {
     window.location.href = "signIn.html";  
 }
           

function show() {
        var box1 = document.getElementById("drop");

        box1.style.display = "block"



    }
    function showalter() {
        var box1 = document.getElementById("drop");

        box1.style.display = "none"

    }