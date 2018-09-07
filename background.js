// Kill sticky headers
// runs `code` when the button is clicked
// Original bookmarklet by Alisdair McDiarmid:
// https://alisdair.mcdiarmid.org/kill-sticky-headers/

'use strict';

const code = `(() => {
  var i, elements = document.querySelectorAll('body *');

    for (i = 0; i < elements.length; i++) {
      if (["sticky", "fixed"].includes(getComputedStyle(elements[i]).position)) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    }
})()`

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript({ code });
});
