// All declarations and initializations
const signupAlertBox = document.querySelector("#signup-alert");
const signupSubmitBtn = document.querySelector("#signup-submit-btn");
const signupAlertBoxCloseBtn = document.querySelector("#close-btn");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const passInput = document.querySelector("#pass");

// Alert Box SHOW and HIDE Behaviour

signupSubmitBtn.addEventListener("click", e => {
    if (emailInput.value === "" || nameInput.value === "" || passInput.value === "") 
        return;
    e.preventDefault();
    localStorage.setItem("accounts", JSON.stringify({name: nameInput.value, email: emailInput.value, pass: passInput.value}));
    signupAlertBox.style.display = "block";
    setTimeout(()=> {
        location.assign('../../mentor-mentee/login.html');
    } ,1500);
});

signupAlertBoxCloseBtn.addEventListener("click", ()=> {
    signupAlertBox.style.display = "none";
});

