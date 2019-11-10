alert('calling background')
let jsonfile = {}
jsonfile["vibe_check_on"] = JSON.stringify({'true'});;
chrome.tabs.onCreated.addListener(
  chrome.storage.local.set(
    jsonfile,
    function() {
      alert('vibe check on set to true')
    }
  )
)

// should not be called when new tab opened
chrome.tabs.onRemoved.addListener(
  chrome.storage.local.clear(
    function() {
      // alert('cleared storage')
    }
  )
)
