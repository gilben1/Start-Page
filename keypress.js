// Keybinds
// Change these to value in the keyCodes dictionary you would like
var activate = "escape";
var send = "enter";
var complete = "right arrow";
var completeback = "left arrow";
var del = "backspace / delete";

// Keycodes dictionary initially grabbed and modified from
// https://github.com/wesbos/keycodes
var keyCodes = {
  8 : "backspace / delete",
  13 : "enter",
  //16 : "shift",
  //17 : "ctrl",
  //18 : "alt",
  27 : "escape",
  //32 : "spacebar",
  32 : " ",
  37 : "left arrow",
  //38 : "up arrow",
  39 : "right arrow",
  //40 : "down arrow",
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  58 : ":",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  //96 : "numpad 0",
  //97 : "numpad 1",
  //98 : "numpad 2",
  //99 : "numpad 3",
  //100 : "numpad 4",
  //101 : "numpad 5",
  //102 : "numpad 6",
  //103 : "numpad 7",
  //104 : "numpad 8",
  //105 : "numpad 9",
  96 : "0",
  97 : "1",
  98 : "2",
  99 : "3",
  100 : "4",
  101 : "5",
  102 : "6",
  103 : "7",
  104 : "8",
  105 : "9",
  160 : "^",
  161 : '!',
  163 : "#",
  164 : '$',
  170 : '*',
  //193 : "?, / or °",
  193 : "?",
};

// These dictionaries can be defined in a file called
// links.js
if (typeof(dests) === 'undefined') {
  var dests = {
    "foo" : "http://google.com"
  };
}
if (typeof(destshort) === 'undefined') {
  var destshort = {
    "foo" : "bar"
  };
}


var counter = 0;
var cmds = 0;
var primed = 0;
var out = "";
var pretab = "";
var automatch = [];
var autoclose = [];
var mcycle = 0;
var ccycle = 0;


// Wipes and builds the autocompletion
function buildAutoComp() {
  automatch = [];
  autoclose = [];
  // build autocomps
  for (var key in dests) {
    if (key.indexOf(out) == 0) { // if we match exactly from 0 onward
      automatch.unshift(key);
    }
    else if (key.includes(out)) { // otherwise, if the substring is found anywhere in the key
      autoclose.unshift(key);
    }
    else if (destshort[key].toLowerCase().includes(out)) { // otherwise, if the substring is found in the shortname
      autoclose.unshift(key);
    }
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;

  var i;
  var prefix = "";
  var match = "";
  var close = "" ;

  if (cmds == 1){
    prefix = "Execute: ";
  }
  if (keyCodes[evt.keyCode] == null) {
    return;
  }
  else if (keyCodes[evt.keyCode] == activate) { // escape => start entering a command
    if(cmds == 1){ // If we were already in command mode, turn it off
      cmds = 0;
      prefix = "";
    }
    else { // Otherwise, turn it on
      cmds = 1;
      prefix = "Execute: ";
    }
    out = "";
    pretab = "";
    mcycle = 0;
    ccycle = 0;
  }
  else if (cmds == 1){ // if we are in command entering mode
    if (keyCodes[evt.keyCode] == del) { // If the key is a delete, remove last from array
      pretab = pretab.slice(0, -1);
      out = pretab;

      buildAutoComp();

      primed = 0;
    }
    else if (keyCodes[evt.keyCode] == complete) { // If the key is a right arrow, try and complete
      if (automatch.length > 0 && mcycle <= automatch.length - 1) {
        prefix = "Execute: (" + pretab + ") ";
        if (primed == -1) {
          out = automatch.shift();
          automatch.push(out);
        }
        out = automatch.shift();
        automatch.push(out);
        mcycle++;

        primed = 1;
      }
      else if (autoclose.length > 0 && ccycle <= autoclose.length - 1) {
        prefix = "Execute: (" + pretab + ") ";
        if (primed == -1) {
          out = autoclose.shift();
          autoclose.push(out);
        }
        out = autoclose.shift();
        autoclose.push(out);
        ccycle++;

        primed = 1;
      }
      if (ccycle > autoclose.length - 1) {
        ccycle = 0;
        mcycle = 0;
      }
    }
    else if (keyCodes[evt.keyCode] == completeback) { // If the key is a left arrow, go to the left autocomp
      if (autoclose.length > 0 && ccycle > 0) {
        prefix = "Execute: (" + pretab + ") ";
        if (primed == 1) {
          out = autoclose.pop();
          autoclose.unshift(out);
        }
        out = autoclose.pop();
        autoclose.unshift(out);
        ccycle--;

        primed = -1;
      }
      else if (automatch.length > 0 && mcycle > 0) {
        prefix = "Execute: (" + pretab + ") ";
        if (primed == 1) {
          out = automatch.pop();
          automatch.unshift(out);
        }
        out = automatch.pop();
        automatch.unshift(out);
        mcycle--;

        primed = -1;
      }
      if (mcycle <= 0) {
        mcycle = automatch.length - 1;
        ccycle = autoclose.length - 1;
      }
    }
    else if (keyCodes[evt.keyCode] != send) { // adding a letter to the command
      pretab += keyCodes[evt.keyCode];
      out = pretab;

      buildAutoComp();

      primed = 0;
      mcycle = 0;
      ccycle = 0;
    }
    else { // try and run the command
      var run = dests[out]; // grab destination from dests dictionary
      if (run != null){ // If we grabbed a destination, open after waiting 0.5s
        document.getElementById("keys").textContent="Going to " + run + "  (" + out + ")";
        setTimeout(function() { window.open(run, "_self"); }, 500);
        return;
      }
      else { // say we couldn't run what was entered
        cmds = 0;

        document.getElementById("keys").textContent="No destination for " + out;
        setTimeout(function() { document.getElementById("keys").textContent=""; }, 500);
        return;
      }
    }

    if (out.length > 0) { // If we have a length in the string, try and find completes
      if (automatch.length > 0) {
        match = "== ";
        for (var m in automatch) {
          match += " (" + automatch[m] + " : " + destshort[automatch[m]] + ") ";
        }
      }
      if (autoclose.length > 0) {
        close = "~= ";
        for (var c in autoclose) {
          close += " (" + autoclose[c] + " : " + destshort[autoclose[c]] + ") ";
        }
      }
    }
  }
  document.getElementById("keys").textContent=prefix + out; //+ match;
  document.getElementById("match").textContent=match;
  document.getElementById("close").textContent=close;
};
