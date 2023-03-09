
console.log("hello")

// let clickEvent = document.querySelector('#aboutmeBtn')
// //when clickEvent is clicked and aboutmeSection is hidden by default show aboutmeSection, otherwise hide it
// clickEvent.addEventListener('click', () => {
//     let aboutmeSection = document.querySelector('#aboutme')
//     if (aboutmeSection.getElementsByClassName.display === 'none') {
//         aboutmeSection.getElementsByClassName.display = 'block';
//     } else {
//         aboutmeSection.style.display = 'none';
//     }
// });


//aboutmeBtn
//about me

let aboutmeBtn = document.querySelector('#aboutmeBtn')
let aboutme = document.querySelector('#aboutme')

aboutmeBtn.addEventListener('click', () => {
    if (aboutme.style.display === 'none') {
        aboutme.style.display = 'block';
    } else {
        aboutme.style.display === 'none'
    }
});