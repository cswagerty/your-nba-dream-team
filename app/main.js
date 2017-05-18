require(["templates/compiled", "views/dream-team", "views/teams", "collections/teams"], 
	function(templates, DreamTeamView, TeamsView, Teams) {

	var Router = Backbone.Router.extend({

		routes: {
			"": "showDreamTeamView",
			"my-team": "showDreamTeamView",
			"teams": "showTeams",
			"players/teams/:teamId": "showTeamPlayers"
		},

		showDreamTeamView: function() {
			var dreamTeamView = new DreamTeamView();
			dreamTeamView.render();
			$("main").html(dreamTeamView.el);
		},

		showTeams: function() {
			var teams = new Teams();
			var teamsView = new TeamsView({collection: teams});
			$("main").html(teamsView.el);
			teams.fetch();
		}
	});

	var router = new Router();

	var initializeApp = function() {
		$(function() {
			// make sure dom is ready before 
			// initializing History API
			Backbone.history.start({pushState: true});

			// all links use push state
			$("main").on("click", "a", function(e) {
				e.preventDefault();
				console.log("clicked!");
				var path = $(this).attr("href");
				router.navigate(path, { trigger: true });
			});
		});
	}

	initializeApp();

});
