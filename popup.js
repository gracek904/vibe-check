
/* get words you need to cross out and store in var*/

let badWords = document.getElementsByTagName("p")
for (let i = 0; i < badWords.length; i++) {
    // let color = badWords[i].style.color;
    // console.log(color)
    // let ourColor = color.length > 0 ? color : "black"
    // badWords[i].style.backgroundColor = color;
    badWords[i].style.visibility = "none"
}