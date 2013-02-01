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
require(['modules/testModule','modules/collection/todosCollection','modules/model/todo'],
		function(testModule,TodosCollection,TodoModel){
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
			var t1=new TodoModel({title:'one'});
			var t2=new TodoModel({title:'two'});
			var t3=new TodoModel();
			t3.set('title','Three');
			todos.add([t1,t2,t3]);
			console.log(todos.length);
			console.log(todos.at(0).get('title'));
		});
/*
define("main", function(){
	console.log('Hello World');
});
*/