require(["router", "events", "templates/compiled"], 
	function(Router, DTEvents, templates) {

	var initializeApp = function() {
		var router = new Router();
		
		$(function() {
			// make sure dom is ready before 
			// initializing History API
			Backbone.history.start({pushState: true});

			// all links use push state
			$("main").on("click", "a", function(e) {
				e.preventDefault();
				DTEvents.trigger("link:click", {path: $(this).attr("href")});
			});
		});
	};

	initializeApp();

});
