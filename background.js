var count = 0;
chrome.browserAction.onClicked.addListener(function(tab) {
  count++
  if(count % 2 === 0) {
    chrome.tabs.executeScript(null, {file: "clear.js"});
  } else {
    chrome.tabs.reload()
  }
})
