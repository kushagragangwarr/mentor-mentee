// All declarations and initializations
const logoutBtns = document.querySelectorAll(".logout");
const filterLabels = document.querySelectorAll(".custom-control-label");
const detailsDivs = document.querySelectorAll(".details");
const sidebar = document.querySelector("#sidebar");
const toggler = document.querySelector("#toggler");
const logoutLeft = document.querySelector("#logout-left");
const filterArray = [];

// Setting the routes
if (localStorage.getItem("login") === null) {
    // location.assign('../error.html');
    location.assign('../../mentor-mentee/error.html');
}

logoutBtns.forEach(logoutBtn => {
    logoutBtn.addEventListener("click", e => {
        e.preventDefault();
        localStorage.removeItem("login");
        // location.assign("../index.html");
        location.assign("../../mentor-mentee/index.html");
    });
});

// For applying filters
filterLabels.forEach(filterLabel => {
    filterLabel.addEventListener("click", checkFilter);
});

// Enabling tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Sidebar toggler
toggler.addEventListener("click", checkSidebar);


// Function for checking the filter and displaying data accordingly

function checkFilter(e) {
    const filterID = e.target.parentNode.childNodes[1].id;
    if (filterArray.includes(filterID)) {
        var index = filterArray.indexOf(filterID);
        filterArray.splice(index, 1);
    } else {
        filterArray.push(filterID);
    }
    detailsDivs.forEach(detailsDiv => {
        detailsDiv.parentNode.classList.remove("hide");
        if (filterArray.length != 0) {
            filterArray.forEach(filter => {
                if (!detailsDiv.classList.contains(filter))
                    detailsDiv.parentNode.classList.add("hide");
            });
        }
    });
}

function checkSidebar() {
    if (sidebar.classList.contains("right100")) {
        sidebar.classList.remove("right100");
        logoutLeft.classList.remove("left100");
        sidebar.classList.add("right0");
        logoutLeft.classList.add("left0");
    } else {
        sidebar.classList.remove("right0");
        logoutLeft.classList.remove("left0");
        sidebar.classList.add("right100");
        logoutLeft.classList.add("left100");
    }
}