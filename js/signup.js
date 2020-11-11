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
    signupAlertBox.style.display = "block";
});

signupAlertBoxCloseBtn.addEventListener("click", ()=> {
    signupAlertBox.style.display = "none";
});

