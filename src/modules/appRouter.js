define('modules/appRouter',function(){
	var applicationRouter = Backbone.Router.extend({
		//TODO: code the routes
		/* define the route and function maps for this router */
	    routes: {
	    	"home" : "showHome",
	    	"about" : "showAbout",
	    	"comingUp" : "showComingUp"
	    },
	    showHome: function(){
	    	console.log('showHome');
	    },
		showAbout: function(){
			console.log('showAbout');
		},
		showComingUp: function(){
			console.log('showComingUp :');
			//console.log('showComingUp : Currently nothing so moving to showAbout');
			//this.navigate('about');
		}
	});
	return applicationRouter;
});