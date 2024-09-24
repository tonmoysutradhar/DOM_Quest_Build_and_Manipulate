document.getElementById('donation-page-btn')
.addEventListener('click', function(){
    showSectionById ('donation-page');
    // button.style.backgroundColor = "lightgreen";
})

document.getElementById('history-page-btn')
.addEventListener('click', function(){
    showSectionById ('history-page');
})


// function changeButtonColor(button) {
//     button.style.backgroundColor = "lightgreen";
// }



function changeColors(clickedButton, otherButton) {
    clickedButton.style.backgroundColor = "#B4F461";
    otherButton.style.backgroundColor = "#bbb0b04d";
}