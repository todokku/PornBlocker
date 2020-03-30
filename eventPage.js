chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.url);
    // chrome.tabs.remove(sender.tab.id, function() {})
})