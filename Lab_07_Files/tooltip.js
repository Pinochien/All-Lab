// 6.1 Define function showTip()
function showTip() {
  var sidTip;                             // A variable named sidTip is defined
  sidTip = document.getElementById("sidTip");  // Get access to the element with id "sidTip"
  sidTip.style.display = "inline";       // The CSS property "display" is set to "inline"
}

// 6.2 Define function hideTip()
function hideTip() {
  var sidTip;                             // Create a variable named sidTip
  sidTip = document.getElementById("sidTip");  // Get access to the element by its id "sidTip"
  sidTip.style.display = "none";         // Hide element by setting display to "none"
}

// 6.3 Define function init()
function init() {
  var sid;                                // Create a variable named sid
  sid = document.getElementById("sid");   // Get access to HTML element with id "sid"
  sid.onmouseover = showTip;              // Link showTip to onmouseover event
  sid.onmouseout = hideTip;               // Link hideTip to onmouseout event
}

// Call init when window is loaded
window.onload = init;
