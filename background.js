chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true}},
    { urls: ["*://*.google.com/*"] },
    ["blocking"]
)

