[![browser support](http://ci.testling.com/popeindustries/util.colour.png)](http://ci.testling.com/popeindustries/util.colour)

A collection of Colour utility functions.

## Usage
```javascript
var colourUtils = require('util.colour');

numberUtils.toComponent('rgb(0,128,255)'); // => {r:0,g:128,b:255}
numberUtils.toComponent('#ff38cf'); // => {r:255,g:56,b:207}
numberUtils.toComponent('#f36'); // => {r:255,g:51,b:102}
numberUtils.rgba('#f36', 0.5); // => 'rgba(255,51,102,0.5)'
```