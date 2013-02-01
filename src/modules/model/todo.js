define('modules/model/todo',function(){
	//return 'Todo Model : Hello World.';
	//backbone
	var Todo = Backbone.Model.extend({
	  // Default todo attribute values
	  initialize: function(){
	      console.log('This model has been initialized.');
	  },
	  defaults: {
	    title: 'DefaultTitle',
	    completed: false
	  }
	});
	//end backbone
	return Todo;//this is requireJS
});