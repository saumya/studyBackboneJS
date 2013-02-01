define('modules/model/todo',function(){
	//return 'Todo Model : Hello World.';
	var Todo = Backbone.Model.extend({
	  // Default todo attribute values
	  defaults: {
	    title: '',
	    completed: false
	  }
	});
	return Todo;
});