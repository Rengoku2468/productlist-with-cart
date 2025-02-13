const buttons = document.querySelectorAll("#select");
const pics = document.getElementsByTagName("img")
function buttonClicked(event) {
    event.currentTarget.style.backgroundColor = "orangered";
}

buttons.forEach(button => {
    button.addEventListener("click", buttonClicked);
});