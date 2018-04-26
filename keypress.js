var keyCodes = {
  0 : "That key has no keycode",
  3 : "break",
  8 : "backspace / delete",
  9 : "tab",
  12 : 'clear',
  13 : "enter",
  16 : "shift",
  17 : "ctrl",
  18 : "alt",
  19 : "pause/break",
  20 : "caps lock",
  21 : "hangul",
  25 : "hanja",
  27 : "escape",
  28 : "conversion",
  29 : "non-conversion",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home",
  37 : "left arrow",
  38 : "up arrow",
  39 : "right arrow",
  40 : "down arrow",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert",
  46 : "delete",
  47 : "help",
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
  59 : "semicolon (firefox), equals",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
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
  91 : "Windows Key / Left ⌘ / Chromebook Search key",
  92 : "right window key",
  93 : "Windows Menu / Right ⌘",
  95: "sleep",
  96 : "numpad 0",
  97 : "numpad 1",
  98 : "numpad 2",
  99 : "numpad 3",
  100 : "numpad 4",
  101 : "numpad 5",
  102 : "numpad 6",
  103 : "numpad 7",
  104 : "numpad 8",
  105 : "numpad 9",
  106 : "multiply",
  107 : "add",
  108 : "numpad period (firefox)",
  109 : "subtract",
  110 : "decimal point",
  111 : "divide",
  112 : "f1",
  113 : "f2",
  114 : "f3",
  115 : "f4",
  116 : "f5",
  117 : "f6",
  118 : "f7",
  119 : "f8",
  120 : "f9",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  124 : "f13",
  125 : "f14",
  126 : "f15",
  127 : "f16",
  128 : "f17",
  129 : "f18",
  130 : "f19",
  131 : "f20",
  132 : "f21",
  133 : "f22",
  134 : "f23",
  135 : "f24",
  144 : "num lock",
  145 : "scroll lock",
  160 : "^",
  161 : '!',
  163 : "#",
  164 : '$',
  165 : 'ù',
  166 : "page backward",
  167 : "page forward",
  168 : "refresh",
  169 : "closing paren (AZERTY)",
  170 : '*',
  171 : "~ + * key",
  172 : "home key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : "semi-colon / ñ",
  187 : "equal sign",
  188 : "comma",
  189 : "dash",
  190 : "period",
  191 : "forward slash / ç",
  192 : "grave accent / ñ / æ / ö",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "open bracket",
  220 : "back slash",
  221 : "close bracket / å",
  222 : "single quote / ø / ä",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >, left back slash",
  230 : "GNOME Compose Key",
  231 : "ç",
  233 : "XF86Forward",
  234 : "XF86Back",
  235 : "non-conversion",
  240 : "alphanumeric",
  242 : "hiragana/katakana",
  243 : "half-width/full-width",
  244 : "kanji",
  255 : "toggle touchpad"
};

// Dictionary of destinations, matched by command string
var dests = {
  "gh"      : "https://github.com",
  "gl"      : "https://gitlab.com",
  "rph"     : "https://www.reddit.com/r/ProgrammerHumor/",
  "rup"     : "https://www.reddit.com/r/unixporn/",
  "d2l"     : "https://d2l.pdx.edu",
  "ban"     : "https://banweb.pdx.edu",
  "msl"     : "https://app.mystudylife.com/",
  "slk"     : "https://pdx-cs.slack.com/messages",
  "333hme"  : "http://web.cecs.pdx.edu/~markem/CS333/",
  "333syl"  : "http://web.cecs.pdx.edu/~markem/CS333/syllabi/2018-02-006.pdf",
  "333gui"  : "http://web.cecs.pdx.edu/~markem/CS333/handouts/guide",
  "ostep"   : "http://pages.cs.wisc.edu/~remzi/OSTEP/",
  "xv6"     : "http://web.cecs.pdx.edu/~markem/CS333/xv6/xv6-book-rev8.pdf"
};

var destshort = {
  "gh"      : "Github",
  "gl"      : "Gitlab",
  "rph"     : "/r/ProgrammerHumor/",
  "rup"     : "/r/unixporn/",
  "d2l"     : "D2L",
  "ban"     : "Banweb",
  "msl"     : "MyStudyLife",
  "slk"     : "PDX-CS Slack",
  "333hme"  : "CS333 Home",
  "333syl"  : "CS333 Syllabus",
  "333gui"  : "CS333 Survival Guide",
  "ostep"   : "OSTEP Book",
  "xv6"     : "XV6 Book"
};

var counter = 0;
var cmds = 0;
var out = "";

document.onkeydown = function(evt) {
  evt = evt || window.event;

  var i;
  var prefix = "";
  var postfix = "";

  if (cmds == 1){
    prefix = "Execute: ";
  }

  if (keyCodes[evt.keyCode] == "escape") { // escape => start entering a command
    if(cmds == 1){ // If we were already in command mode, turn it off
      cmds = 0;
      prefix = "";
    }
    else { // Otherwise, turn it on
      cmds = 1;
      prefix = "Execute: ";
    }
    out = "";
  }
  else if (cmds == 1){
    if (keyCodes[evt.keyCode] == "backspace / delete") { // If the key is a delete, remove last from array
      out = out.slice(0, -1);
    }
    else if (keyCodes[evt.keyCode] == "right arrow") { // If the key is a right arrow, try and complete
      for (var key in dests) {
        if (key.indexOf(out) == 0) { // if we match from start, say so
          out = key;
        }
        else if (key.includes(out)) { // if we match at all, also say so
          out = key;
        }
      }
    }
    else if (keyCodes[evt.keyCode] != "enter") {
      out += keyCodes[evt.keyCode];
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

    if (out.length > 0) { // If we have a counter in the string, try and find completes
      for (var key in dests) {
        if (key.indexOf(out) == 0) { // if we match from start, say so
          postfix += " (" + key + " : " + destshort[key] + ") ";
        }
        else if (key.includes(out)) { // if we match at all, also say so
          postfix += " ~ (" + key + " : " + destshort[key] + ") ";
        }
      }
    }
  }
  document.getElementById("keys").textContent=prefix + out + postfix;
};
