# SundayPyjamas Adblocker | Manifest v3

## Overview

SundayPyjamas Adblocker is a Chrome extension designed to block advertisements and tracking scripts from various known ad networks and analytics services. This extension is built with privacy in mind and uses Chrome's Manifest V3 architecture.

## Relevant Files

The main components of this extension are:

1. `manifest.json`: Defines the extension's properties, permissions, and structure.
2. `background.js`: Contains the core functionality of the adblocker.
3. `README.md`: This file, providing documentation for the project.

## Manifest Version

This extension uses **Manifest V3**, which is the latest version of Chrome's extension architecture. Manifest V3 was introduced to improve extension security, privacy, and performance. Key features of Manifest V3 include:

- Use of service workers instead of background pages
- Improved declarative APIs for content blocking
- More secure handling of extension permissions

```json
"manifest_version": 3
```

## Manifest Structure

The `manifest.json` file defines the extension's properties and capabilities:

### Basic Information

```json
{
    "name": "SundayPyjamas Adblocker",
    "version": "1.0",
    "description": "Private by Design, A SundayPyjamas Product"
}
```

### Permissions

The extension requires the following permissions:

```json
"permissions": [
    "declarativeNetRequest",
    "declarativeNetRequestFeedback",
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*"
]
```

- `declarativeNetRequest`: Allows the extension to use declarative rules to block network requests.
- `declarativeNetRequestFeedback`: Provides feedback on matched declarative rules.
- The other permissions are specific domains known for serving ads and tracking scripts.

### Background Script

The extension uses a service worker as its background script:

```json
"background": {
    "service_worker": "background.js"
}
```

This indicates that the core functionality of the adblocker is implemented in the `background.js` file.

### Icons

The extension includes a 128x128 pixel icon:

```json
"icons": {
    "128": "icons/logo_128x128.png"
}
```

## Implementation Details

The `background.js` file contains the core logic for the adblocker. It likely uses the `declarativeNetRequest` API to define rules for blocking requests to the specified ad and tracking domains. This API allows for efficient, declarative blocking of network requests without the need for a persistent background page.

## Development Setup

To work on this extension:

1. Clone the repository containing these files.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the manifest.json and background.js files.

## Next Steps for Development

To enhance this adblocker:

1. Review and optimize the blocking logic in `background.js`.
2. Consider adding a user interface for enabling/disabling the adblocker or customizing blocking rules.
3. Expand the list of blocked domains as needed.
4. Implement logging or analytics to track the number of blocked requests (ensuring user privacy is maintained).
5. Consider implementing optional features like whitelisting for trusted sites.
