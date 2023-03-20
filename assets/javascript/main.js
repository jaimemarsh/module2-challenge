
console.log("javascript is connected")

// makes aboutme section appear and dissapear
function navFunction() {
    let nav = document.querySelector('#nav');
    let displaySetting = nav.style.display;
    // flex for flexbox
    if (displaySetting === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
    console.log("Nav Button")
}

let navBtn = document.querySelector("#hamburgerBtn");
navBtn.addEventListener("click", navFunction);

// makes aboutme section appear and dissapear
function aboutmeFunction() {
    let aboutMe = document.querySelector('#aboutme');
    let displaySetting = aboutMe.style.hidden;
    // flex for flexbox
    if (aboutMe.style.display === 'flex') {
        aboutMe.style.display = 'none';
    } else {
        aboutMe.style.display = 'flex';
    }
    console.log("Aboutme Button");
}

let btn = document.querySelector("#aboutmeBtn");
btn.addEventListener("click", aboutmeFunction);


//makes work section appear and dissapear
function workFunction() {
    let work = document.querySelector('#work');
    let displaySetting = work.style.display;
    // flex for flexbox
    if (displaySetting === 'flex') {
        work.style.display = 'none';
    } else {
        work.style.display = 'flex'
    }

    console.log("Work Button");
}
let workBtn = document.querySelector("#workBtn");
workBtn.addEventListener("click", workFunction);


// When the user scrolls the page, execute myFunction
window.onscroll = function () { scrollFunction() };

// Get the navbar
var navbar = document.getElementById("navScroll");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    console.log("scroll")
}