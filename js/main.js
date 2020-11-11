const noUserText = document.querySelector("#no-user-text");

if (localStorage.getItem("accounts") === null) {
    location.assign('../error.html');
}