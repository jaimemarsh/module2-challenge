
console.log("javascript is connected")
//help from TA two different ways to make hidden and display
// makes aboutme section appear
function myFunction() {
    let aboutMe = document.querySelector('#aboutme');
    let displaySetting = aboutMe.style.hidden;
    // flex for flexbox
    if (aboutMe.style.display === 'flex') {
        aboutMe.style.display = 'none';
    } else {
        aboutMe.style.display = 'flex';
    }
    console.log(displaySetting)
    console.log("Button");
    console.log(aboutMe.style.display)
}

let btn = document.querySelector("#aboutmeBtn");
btn.addEventListener("click", myFunction);
//makes work section appear
function workFunction() {
    let work = document.querySelector('#work');
    let displaySetting = work.style.display;
    // flex for flexbox
    if (displaySetting === 'flex') {
        work.style.display = 'none';
    } else {
        work.style.display = 'flex'
    }

    console.log("Button");
}
let workBtn = document.querySelector("#workBtn");
workBtn.addEventListener("click", workFunction);

//lol