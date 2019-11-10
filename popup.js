window.addEventListener('load', function load(event) {
  document.getElementById('send').onclick = function() {
    chrome.tabs.query({"active":true,"lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.reload()
      chrome.runtime.sendMessage({greeting: "hello"})
    });
  };
});
