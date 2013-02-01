define('modules/appRouter',function(){
	var applicationRouter = Backbone.Router.extend({
		//TODO: code the routes
		/* define the route and function maps for this router */
	    routes: {
	    	"about" : "showAbout",
	    	"comingUp" : "showComingUp"
	    },
		showAbout: function(){
			console.log('showAbout');
		},
		showComingUp: function(){
			console.log('showComingUp');
		}
	});
	return applicationRouter;
});