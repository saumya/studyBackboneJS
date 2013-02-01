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
			       console.log(this);
			       var t1=new TodoModel({title: 'first',completed: false});
			       var t2=new TodoModel();
			       var t3=new TodoModel({title: 'third',completed: false});
			       t2.set('title','Second Model');
			       this.add([t1,t2,t3]);
			  }
			});
			//End backbone
			return TodosCollection;
		});

