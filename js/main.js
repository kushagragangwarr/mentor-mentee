// All declarations and initializations
const logoutBtn = document.querySelector("#logout-btn");

if (localStorage.getItem("login") === null) {
    // location.assign('../error.html');
    location.assign('../../mentor-mentee/error.html');
}

logoutBtn.addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem("login");
    // location.assign("../index.html");
    location.assign("../../mentor-mentee/index.html");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})