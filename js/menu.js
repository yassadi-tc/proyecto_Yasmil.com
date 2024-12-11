document.getElementById("menu_icon").addEventListener("click", function() {
    var menuNav = document.getElementById("menu_nav");
    if (menuNav.style.display === "none" || menuNav.style.display === "") {
        menuNav.style.display = "block"; 
    } else {
        menuNav.style.display = "none"; 
    }
});