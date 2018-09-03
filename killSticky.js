// Kill sticky all headers on a page
// original bookmarklet by Alisdair McDiarmid
// https://alisdair.mcdiarmid.org/kill-sticky-headers/

var i, elements = document.querySelectorAll('body *');

  for (i = 0; i < elements.length; i++) {
    if (getComputedStyle(elements[i]).position === 'fixed') {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
