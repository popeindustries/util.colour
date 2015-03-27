A collection of Colour utility functions.

## Usage
```javascript
var colourUtils = require('util.colour');

colourUtils.toComponent('rgb(0,128,255)'); // => {r:0,g:128,b:255}
colourUtils.toComponent('#ff38cf'); // => {r:255,g:56,b:207}
colourUtils.toComponent('#f36'); // => {r:255,g:51,b:102}
colourUtils.rgba('#f36', 0.5); // => 'rgba(255,51,102,0.5)'
```
