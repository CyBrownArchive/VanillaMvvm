define([], function () {
	'use strict';

	var Controller = function () {
		this.watchHanlers = {};
		this.values = {};
	};

	Controller.prototype.addProperty = function (prop) {
		var _this = this;
		if (!this.hasOwnProperty(prop)) {
			Object.defineProperty(this, prop, {
				get: function () {
					return _this.values[prop];
				},
				set: function (value) {
					_this.values[prop] = value;
					_this.notify(prop);
				}
			});
		}
	};

	Controller.prototype.notify = function (prop) {
		var _this = this;
		if (this.watchHanlers.hasOwnProperty(prop)) {
			this.watchHanlers[prop].forEach(function (handler) {
				handler(_this.values[prop]);
			});
		};
	};

	Controller.prototype.listen = function (prop, callback) {
		if (!this.watchHanlers[prop]) {
			this.watchHanlers[prop] = [];
		}
		this.addProperty(prop);
		this.watchHanlers[prop].push(callback);
	};

	Controller.prototype.addProperties = function (props) {
		var _this = this;
		props.forEach(function (prop) {
			_this.addProperty(prop);
		});
	};

	Controller.prototype.watch = function (prop, node) {
		var _this = this;
		this.addProperty(prop);
		node.addEventListener('keyup', function (event) {
			_this[prop] = node.value;
		});
	};

	Controller.prototype.update = function (prop, node) {
		var _this = this;
		this.listen(prop, function () {
			node.textContent = _this[prop];
		});
	};

	return Controller;
});
