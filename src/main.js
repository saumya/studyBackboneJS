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
require(['modules/appRouter','modules/collection/todosCollection','modules/model/todo','modules/view/todoView'],
		function(ApplicationRouter,TodosCollection,TodoModel,TodoView){
			//instantiate the Router
			var aRouter=new ApplicationRouter();
			console.log('Router instantiated.');
			Backbone.history.start();
			console.log('Backbone history started');
			//view
			var todoView=new TodoView();
			
			
			
			//collection and model
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