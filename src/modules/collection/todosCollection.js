define('modules/collection/todosCollection',
		['modules/model/todo'],
		function(TodoModel){
			//backbone
			var TodosCollection = Backbone.Collection.extend({
			  model: TodoModel,
			  	//localStorage: new Store('todos-backbone'),  
			  initialize: function(){
			      console.log('This COLLECTION has been initialized.');
			       //this.on('change', this.onModelChange,this);//adding event handlers
			  }
			});
			//End backbone
			return TodosCollection;
		});

