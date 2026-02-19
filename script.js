let generatedOTP = "";

function showLogin(){
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
}

function showSignup(){
    document.getElementById("signupForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

function togglePass(id, icon){
    let input = document.getElementById(id);
    if(input.type === "password"){
        input.type = "text";
        icon.classList.replace("fa-eye","fa-eye-slash");
    }else{
        input.type = "password";
        icon.classList.replace("fa-eye-slash","fa-eye");
    }
}

function sendOTP(){
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    alert("Demo OTP: " + generatedOTP);
}

function verifyOTP(){
    let entered = document.getElementById("otp").value;
    if(entered === generatedOTP){
        alert("Account Created Successfully!");
        showLogin();
    }else{
        alert("Invalid OTP!");
    }
}
