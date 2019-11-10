var textNodes = deepText(document.getElementsByTagName('body')[0])
for(let i = 0; i < textNodes.length; i++) {
  let txt = textNodes[i].nodeValue
  if(txt && txt.length > 10) {
    console.log(txt.trim())
  }
}
//
// for(let i = 0; i < textNodes.length; i++) {
//   let txt = textNodes[i].nodeValue.trim()
//   if(txt && txt.length > 15) {
//     const http = new XMLHttpRequest();
//     let params = JSON.stringify(
//       { text: txt,
//       api_key: "545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0" }
//     );
//     const url='https://apis.paralleldots.com/v4/abuse';
//     http.open("POST", url, true);
//
//     http.onreadystatechange = function() {
//       if (http.readyState === 4 && http.status === 200) {
//         alert(http.responseText);
//       } else {
//         alert('error')
//       }
//     }
//     http.send(params);
//
//   }
//   textNodes[i].nodeValue = ""
// }
//
//
// function deepText(node){
//   var A = [];
//   if (node) {
//     node = node.firstChild;
//     while(node !== null){
//       if(node.nodeType === 3) {
//         A[A.length] = node;
//       }
//       else {
//         A = A.concat(deepText(node));
//       }
//       node = node.nextSibling;
//     }
//   }
//   return A;
// }


// test
let http = new XMLHttpRequest()
let params ='text=you f**king a$$hole&api_key=545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0';

console.log(params)
const url = 'https://apis.paralleldots.com/v4/abuse';
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

console.log("opened")

http.onreadystatechange = function() {
  if (http.readyState === 4 && http.status === 200) {
    alert(http.responseText);
  }
}
console.log(params);
http.send(params);
