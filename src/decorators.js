/**
 * Model decorators
 * target Controller class
 * @param  {object} model
 * @return {function}
 */
exports.Model = function (model) {
	return function (target, key, descriptor) {
		target.prototype.model = model;
	};
};