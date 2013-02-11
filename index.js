/**
 * Extract colour channels from a colour string (rgb(r,g,b), rrggbb, rgb)
 * @param {String} colour
 */
exports.toComponent = function(colour) {
	// Remove hash and spaces
	colour = colour.replace(/[#\s]/g, '');

	// rgb(r, g, b)
	if (/^rgb/.test(colour)) {
		var re = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
		var channels = re.exec(colour);
		return {
			r: parseInt(channels[1], 10),
			g: parseInt(channels[2], 10),
			b: parseInt(channels[3], 10)
		};
	// #rrggbb
	} else if (colour.length === 6) {
		re = /^(\w{2})(\w{2})(\w{2})$/;
		channels = re.exec(colour);
		return {
			r: parseInt(channels[1], 16),
			g: parseInt(channels[2], 16),
			b: parseInt(channels[3], 16)
		};
	// #rgb
	} else if (colour.length === 3) {
		re = /^(\w{1})(\w{1})(\w{1})$/;
		channels = re.exec(colour);
		return {
			r: parseInt(channels[1] + channels[1], 16),
			g: parseInt(channels[2] + channels[2], 16),
			b: parseInt(channels[3] + channels[3], 16)
		};
	}
};

/**
 * Generate rgba(r,g,b,a) colour string
 * @param {String} colour
 * @param {Number} alpha
 */
exports.rgba = function(colour, alpha) {
	var c;
	c = exports.toComponent(colour);
	return "rgba(" + c.r + "," + c.g + "," + c.b + "," + alpha + ")";
};
