chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {code:"console.debug('btn pressed')"});
    chrome.tabs.executeScript(null, {code:"location.reload()"});
});