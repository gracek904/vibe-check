alert('calling content')
chrome.storage.local.get(
  "vibe_check_on",
  function(result) {
    alert(JSON.stringify(result))
    if(result.vibe_check_on === "true") {
      let textNodes = deepText(document.getElementsByTagName('body')[0])
      for(let i = 0; i < textNodes.length; i++) {
        console.log('removing content')
        // TODO: remove only if hateful
        textNodes[i].nodeValue = ""
      }
    }
  }
);


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
