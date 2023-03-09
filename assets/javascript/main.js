
console.log("javascript is connected")

// makes aboutme section appear
function myFunction() {
    let aboutMe = document.querySelector('#aboutme');
    let displaySetting = aboutMe.style.hidden;
    // flex for flexbox
    if (displaySetting === 'flex') {
        aboutMe.style.display = 'none';
    } else {
        aboutMe.style.display = 'flex'
    }

    console.log("Button");
}

let btn = document.querySelector("#aboutmeBtn");
btn.addEventListener("click", myFunction);



