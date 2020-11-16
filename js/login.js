// All declarations and initializations
const nameInput = document.querySelector("#name");
const passInput = document.querySelector("#pass");
const loginSubmitBtn = document.querySelector("#login-submit-btn");

loginSubmitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (nameInput.value === "" || passInput.value === "") 
        return;

    let accounts = localStorage.getItem("accounts");
    if (accounts === null) {
        userAlert();
        return;
    }
    
    accounts = JSON.parse(accounts);
    if (accounts.name === nameInput.value || accounts.email === nameInput.value) {
        if (accounts.pass === passInput.value) {
            localStorage.setItem("login", "yes");
            // location.assign("../main.html");
            location.assign("../../mentor-mentee/main.html");
        }
        else passAlert();
    } else userAlert();
});

function userAlert() {
    const noUserAlert = document.querySelector("#no-user-alert");
    noUserAlert.style.display = "block";
    window.setTimeout(function() {
        noUserAlert.style.display = "none";
    }, 2000);
    return;
}

function passAlert() {
    const wrongPassAlert = document.querySelector("#wrong-pass-alert");
    wrongPassAlert.style.display = "block";
    window.setTimeout(function() {
        wrongPassAlert.style.display = "none";
    }, 2000);
    return;
}