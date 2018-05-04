# Start-Page
My firefox start-page. I've removed sensitive URLs, however the general layout is the same.

# Usage
Check [/r/startpages](https://www.reddit.com/r/startpages/) to find out how to use it with your specific browser.

# Javascript Shell (sorta)

Keybinds can be set in the variables at the head of `keypress.js`

Default keybinds
- `Escape` => open/close shell
- `Enter` => activate command
- `Right arrow` => tab complete right
- `Left Arrow` => tab complete left
- `Backspace` => delete a character

```
== points to exact matches from the keyword entered (f ==> foo)

~= points to substring matches from the keyword entered (f ==> ofo)
```

# Adding Links

By default, there will be no link commands set in `keypress.js`. If you want to add your own commands, create two dictionaries in a file called `links.js`. `index.html` already includes `links.js`, so you just need to create it.     

The format is as follows:
```
var dests = {
  "command" : "https://link.com"
 };
 
 var destshort = {
  "command" : "Link shortname"
 };
 ```
