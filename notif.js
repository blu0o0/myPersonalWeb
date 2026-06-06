window.onload = function () {
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Welcome to my personal website!, Thank you for visiting");
        sessionStorage.setItem("welcomeShown", "true");
    }
};
   const date = new Date();
const formattedDate = date.toLocaleDateString();
document.getElementById("current_date").innerHTML = formattedDate;