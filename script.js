
var searchIcon = document.querySelector("#fa-magnifying-glass");
var closeIcon = document.querySelector("#overlay-font");
var overlay = document.querySelector(".overlay");

searchIcon.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// responsive-Navbar

var menu = document.querySelector("#menu-btn");
var mobile_nav = document.querySelector(".nav-overlay");
var close_icon = document.querySelector("#close-icon");
var nav_ul = document.querySelector("#nav-ul");

menu.addEventListener('click', () => {
    mobile_nav.style.display = 'block';
    menu.style.display = 'none';
    close_icon.style.display = 'block';
    nav_ul.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close_icon.addEventListener('click',()=>{

    mobile_nav.style.display = 'none';
    close_icon.style.display = 'none';
    menu.style.display = 'block';
    nav_ul.style.display = 'none';
});


// search bar overlay class overflow 

var searchIcon = document.querySelector("#fa-magnifying-glass");
var closeIcon = document.querySelector("#overlay-font");
var overlay = document.querySelector(".overlay");

searchIcon.addEventListener('click', () => {
    overlay.classList.add('active');
    // Overlay ko active karte waqt scroll bar ko hide karo
    document.body.style.overflow = 'hidden';
});

closeIcon.addEventListener('click', () => {
    overlay.classList.remove('active');
    // Overlay ko inactive karte waqt scroll bar ko wapas show karo
    document.body.style.overflow = 'auto'; // auto ya scroll bhi use kar sakte hain
});




