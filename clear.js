var textNodes = deepText(document.getElementsByTagName('body')[0])
for(let i = 0; i < textNodes.length; i++) {
  console.log(textNodes[i] === null)
}

for(let i = 0; i < textNodes.length; i++) {
  const http = new XMLHttpRequest();
  let params = JSON.stringify({ text: textNodes[i].nodeValue, api_key: "545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0" });
  const url='https://apis.paralleldots.com/v4/abuse';
  http.open("POST", url, true);

  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      alert(http.responseText);
    } else {
      alert('error')
    }
  }

  http.send(params);


  textNodes[i].nodeValue = ""
}


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
function deepText(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i], nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          textNodes.push(node);
        }
      }
      else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(deepText(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}
