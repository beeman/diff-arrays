(function(global) {

	var indexOf = Array.prototype.indexOf || function(elem) {
		var idx, len;

		if (this == null) {
			throw new TypeError("indexOf called on null or undefined");
		}

		for (idx = 0, len = this.length; idx < len; ++idx) {
			if (this[idx] === elem) {
				return idx;
			}
		}

		return -1;
	};

	function difference(lhs, rhs) {
		var idx, len;
		var res = {
			lhs: [],
			rhs: []
		};

		for (idx = 0, len = lhs.length; idx < len; ++idx) {
			if (indexOf.call(rhs, lhs[idx]) === -1) {
				res.lhs.push(lhs[idx]);
			}
		}
		for (idx = 0, len = rhs.length; idx < len; ++idx) {
			if (indexOf.call(lhs, rhs[idx]) === -1) {
				res.rhs.push(rhs[idx]);
			}
		}
		return res;
	}

	if (typeof module === "object" && module.exports) {
		module.exports = difference;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return difference;
		});
	} else {
		global.difference = difference;
	}

}(this));
