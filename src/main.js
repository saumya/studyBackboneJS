/*
$.fn.alpha = function() {
    return this.append('<p>Alpha is Go!</p>');
};
define("jquery.alpha", function(){});

$.fn.beta = function() {
    return this.append('<p>Beta is Go!</p>');
};

define("jquery.beta", function(){});

require(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();
        $('body').append('<p>Lets Go.</p>');
    });
});

define("main", function(){});
*/
/*
//config require
requirejs.config({
	baseUrl: 'js/vendor',
	paths:{
		app: '../../src'
	}
});
// Start the main app logic.
requirejs(['src/modules'],
function   (module) {
	console.log('Hello World');
});
*/
require(['modules/addModule','modules/testModule','modules/collection/todosCollection'],
		function(addModule,testModule,TodosCollection){
			/*
			console.log(addModule);
			console.log(testModule);
			//console.log(TodoModel);
			var todoModel=new TodoModel();
			console.log(todoModel.get('title'));
			console.log(todoModel.get('completed'));
			todoModel.set("title", "myTitle");
			todoModel.set("completed", true);
			*/
			//console.log(TodosCollection);
			var todos=new TodosCollection();
			console.log('total items todo = '+todos.length);
		});
/*
define("main", function(){
	console.log('Hello World');
});
*/