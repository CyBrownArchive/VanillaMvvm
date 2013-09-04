define(['lib/Controller'], function (Controller) {
	'use strict';

	var TestController = function () {
		Controller.call(this);
	};
	TestController.prototype = Object.create(Controller.prototype);

	TestController.prototype.addTask = function (task) {

	};

	return TestController;
});
