var textNodes = deepText(document.getElementsByTagName('body')[0])
// for(let i = 0; i < textNodes.length; i++) {
//   let txt = textNodes[i].nodeValue
//   if(txt && txt.length > 10) {
//     console.log(txt.trim())
//   }
// }
//
for(let i = 0; i < textNodes.length; i++) {
  let txt = textNodes[i].textContent
  if(txt && txt.length > 1) {
    txt = txt.trim()
    let http = new XMLHttpRequest()
    let params ='text=' + txt + '&api_key=y7xvBoT8h0PJQ1nj3DYGxLpm2DdOBbNyXMnZf3qNaX0';
    const url = 'https://apis.paralleldots.com/v4/abuse';
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    console.log(txt)
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        response = http.responseText
        console.log(response)
        if(response['abusive'] > 0.5) {
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


// test
// let http = new XMLHttpRequest()
// let params ='text=you f**king a$$hole&api_key=545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0';
//
// console.log(params)
// const url = 'https://apis.paralleldots.com/v4/abuse';
// http.open("POST", url, true);
// http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//
// console.log("opened")
//
// http.onreadystatechange = function() {
//   if (http.readyState === 4 && http.status === 200) {
//     alert(http.responseText);
//   }
// }
// console.log(params);
// http.send(params);
