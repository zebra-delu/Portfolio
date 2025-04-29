function sub() {
    const fullname = document.getElementById("Fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("Password").value.trim();
    
    const errors = [];

    if (!fullname) {
        console.log("Please enter your name");
        errors.push("name");
    }

    if (!email) {
        console.log("Please enter your email");
        errors.push("email");
    }

    if (!password) {
        console.log("Please enter your password");
        errors.push("password");
    }

    if (errors.length === 0) {
        console.log("Form submitted successfully!");
        // You can submit the form or do something else here.
    }
}
function passwordChecking(){
    const password = document.getElementById("password").value;
    const msg = document.getElementById("passwordMsg");

    if (password.length > 8){
        msg.innerHTML= "<span class='success'>Password is strong</span>";
    } else if(password.length >6) {
        msg.innerHTML= "<span class='warning'>Password is medium</span>";
    } else {
        msg.innerHTML = "<span class='error'>Password is weak</span>";
    }

    }


