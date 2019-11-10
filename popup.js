
/* get words you need to cross out and store in var*/

let badWords = document.getElementsByTagName("p")
for (let i = 0; i < badWords.length; i++) {
    let str = "";
    let st = badWords.[i].innerText
    for (let j = 0, s = st; j < s.length; j++)
        var c = s.charAt(j)
        if(c !== "\n"){
            str += " "
        } else {
            str += "\n"
        }

    badWords[i].innerText = str;

}

