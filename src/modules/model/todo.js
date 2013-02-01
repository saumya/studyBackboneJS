define('modules/model/todo',function(){
	//return 'Todo Model : Hello World.';
	//backbone
	var Todo = Backbone.Model.extend({
	  // Default todo attribute values
	  initialize: function(){
	      console.log('This model has been initialized.');
	       this.on('change', this.onModelChange);//adding event handlers
	  },
	  defaults: {
	    title: 'DefaultTitle',
	    completed: false
	  },
	  onModelChange : function(ev){
	  	console.log('on Model Change');
	  	console.log(ev);
	  	console.log('---------------');
	  }
	});
	//end backbone
	return Todo;//this is requireJS
});