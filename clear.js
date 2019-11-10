var textNodes = deepText(document.getElementsByTagName('body')[0])


for(let i = 0; i < textNodes.length; i++) {
  let txt = textNodes[i].textContent
  if(txt && txt.length > 1) {
    txt = txt.trim()
    let http = new XMLHttpRequest()
    let params ='text=' + txt + '&api_key=y7xvBoT8h0PJQ1nj3DYGxLpm2DdOBbNyXMnZf3qNaX0';
    const url = 'https://apis.paralleldots.com/v4/abuse';
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        response = http.responseText
        console.log(response + " " + response['abusive'])
        if(response['abusive'] > 0.5) {
          console.log(response + " cleared")
          textNodes[i].nodeValue = ""
        }
      }
    }
    http.send(params);
  }
}


function deepText(node){
  var A = [];
  if (node) {
    node = node.firstChild;
    while(node !== null){
      if(node.nodeType === 3) {
        A[A.length] = node;
      }
      else {
        A = A.concat(deepText(node));
      }
      node = node.nextSibling;
    }
  }
  return A;
}
