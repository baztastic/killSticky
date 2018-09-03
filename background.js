// Kill sticky headers
// opens the js file killSticky.js when the button is clicked
// Original bookmarklet:
// https://alisdair.mcdiarmid.org/kill-sticky-headers/

'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "killSticky.js"});
});
