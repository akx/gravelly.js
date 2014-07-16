gravelly
========

Generates SVG paths.

Works in the browser (installs itself as `window.Gravelly`) or as a CommonJS module.

Etymology
---------

Some paths are gravelly.

Usage
-----

```javascript
Gravelly = require("./gravelly");

var curve = Gravelly()
			.moveTo(150, 330)
			.relLineTo(100, -200)
			.quadraticTo(400, 50, 600, 30)
			.toString();

// put that curve in your SVG path
```