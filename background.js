const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*"
  ];
  
  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1, 2, 3] // Replace with the actual rule IDs you want to remove
    });
  
    const rules = defaultFilters.map((filter, index) => {
      return {
        id: index + 1, // Replace with a unique integer ID for each rule
        priority: 1,
        action: {
          type: "block"
        },
        condition: {
          urlFilter: filter
        }
      };
    });
  
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules
    });
  });
  