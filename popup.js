
/* get words you need to cross out and store in var*/

var badWords = document.getElementsByTagName('img');
for (var i = 0, l = badWords.length; i < l; i++) {
    badWords[i].src = 'http://placekitten.com/' + badWords[i].width + '/' + badWords[i].height;
}
