chrome.browserAction.onClicked.addListener(function() {
  alert('pressed')
  coverScreen()
})


function coverScreen() {
  let textNodes = deepText(document.getElementsByTagName('body')[0])
  alert(textNodes.length)
  for(let i = 0; i < textNodes.length; i++) {
    // TODO: remove only if hateful
    textNodes[i].nodeValue = ""
  }
}


function deepText(node){
  var A= [];
  if(node){
    node= node.firstChild;
    while(node!= null){
      if(node.nodeType== 3) A[A.length]=node;
      else A= A.concat(deepText(node));
      node= node.nextSibling;
    }
  }
  return A;
}
