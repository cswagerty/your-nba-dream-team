require(["templates/compiled", "views/dream-team"], function(templates, DreamTeamView) {

	var Router = Backbone.Router.extend({

		routes: {
			"": "showDreamTeamView",
			"my-team": "showDreamTeamView",
			"teams": "showTeams",
			"team/:teamId/players": "showTeamPlayers"
		},

		showDreamTeamView: function() {
			var dreamTeamView = new DreamTeamView();
			dreamTeamView.render();
			$("main").append(dreamTeamView.el);
		}
	});

	var router = new Router();

	var initializeApp = function() {
		$(function() {
			// make sure dom is ready before 
			// initializing History API
			Backbone.history.start({pushState: true});
		});
	}

	initializeApp();

});
