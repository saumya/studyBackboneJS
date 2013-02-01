define('modules/view/todoView',function(){
	//backbone
	var TodoView = Backbone.View.extend({
		tagName: "li",
		className: "document-row",
		todoTpl: _.template($('#item-template').html()),// Cache the template function for a single item.
		helloWorldTpl: _.template( $("#helloWorld-template").html(), {} ),
		events: {
			//"click": "onWholeElement",
			"click #hello_button": "onButtonClick"
		},
		initialize: function(){
			console.log('TodoView : initialize ');
			this.render();
		},
		render: function(){
			console.log('TodoView : render ');
			//this.$el.html( this.todoTpl( this.model.toJSON() ) );
			/*
			this.$el.html( this.todoTpl({'What':'is this ?!'}));
		    this.input = this.$('.edit');
		    */
		    this.$el.html(this.helloWorldTpl);
		    //
		    return this;
		},
		el: $("#helloWorld_container"),
		//Event handlers
		onWholeElement:function(){
			console.log('TodoView : onWholeElement : click');
		},
		onButtonClick:function(){
			console.log('TodoView : onButtonClick : click');
		}
		
	});
	//End backbone
	return TodoView;
});
