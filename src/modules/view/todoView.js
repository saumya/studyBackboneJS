define('modules/view/todoView',function(){
	//backbone
	var TodoView = Backbone.View.extend({
		tagName: "li",
		className: "document-row",
		//todoTpl: _.template( $('#item-template').html() ),// Cache the template function for a single item.
		events: {
			"click .icon": "open"
		},
		initialize: function(){
			console.log('TodoView : initialize ');
		},
		render: function(){
			console.log('TodoView : render ');
			this.$el.html( this.todoTpl( this.model.toJSON() ) );
		    this.input = this.$('.edit');
		    return this;
		},
		//Event handlers
		open:function(){
			console.log('TodoView : open');
		}
	});
	//End backbone
	return TodoView;
	
});
