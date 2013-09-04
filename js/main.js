require(['controllers/TestController'], function (TestController) {
	'use strict';

	var txtTaskName = document.getElementsByClassName('txt-task-name')[0];
	var spanTaskName = document.getElementsByClassName('v-task-name')[0];

	var testController = new TestController();
	testController.watch('name', txtTaskName);
	testController.update('name', spanTaskName);

	document.getElementsByClassName('x-task-add')[0].addEventListener('click', function (event) {
		var node = document.createElement('li');
		node.textContent = testController.name;
		document.getElementsByClassName('list-tasks')[0].appendChild(node);
	});

});
