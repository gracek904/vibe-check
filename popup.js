window.addEventListener('load', function load(event) {
  document.getElementById('send').onclick = function() {
    chrome.tabs.query({"active":true,"lastFocusedWindow": true}, function(tabs) {
      alert('pressed')
      chrome.tabs.reload()
    });
  };
});



function coverScreen() {
  let textNodes = deepText(document.getElementsByTagName('body')[0])
  for(let i = 0; i < textNodes.length; i++) {
    console.log('removing content')
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
