
console.log("javascript is connected")

// makes aboutme section appear
function myFunction() {
    let aboutMe = document.querySelector('#aboutme');
    let displaySetting = aboutMe.style.hidden;
    // flex for flexbox
    if (displaySetting === 'flex') {
        aboutMe.style.display = 'none';
    } else {
        aboutMe.style.display = 'flex';
    }

    console.log("Button");
}

let btn = document.querySelector("#aboutmeBtn");
btn.addEventListener("click", myFunction);


function workFunction() {
    let work = document.querySelector('#work');
    let displaySetting = work.style.hidden;
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

