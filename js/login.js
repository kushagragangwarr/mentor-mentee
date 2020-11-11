// All declarations and initializations
const nameInput = document.querySelector("#name");
const passInput = document.querySelector("#pass");
const loginSubmitBtn = document.querySelector("#login-submit-btn");

loginSubmitBtn.addEventListener("click", e => {
    e.preventDefault();
    let accounts = localStorage.getItem("accounts");
    if (accounts === null) return;
    
    accounts = JSON.parse(accounts);
    if ((accounts.name === nameInput.value || accounts.email === nameInput.value) && accounts.pass === passInput.value)
        location.assign('../main.html');
    else console.log("NO");
});