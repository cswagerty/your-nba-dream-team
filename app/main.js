require(["templates/compiled", "views/dream-team", "views/teams", 
	"collections/teams", "views/team-players", "collections/players"], 
	function(templates, DreamTeamView, TeamsView, Teams, TeamPlayersView, Players) {

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
		},

		showTeamPlayers: function(teamId) {
			var teamPlayers = new Players({teamId: teamId});
			var teamPlayersView = new TeamPlayersView({collection: teamPlayers});
			$("main").html(teamPlayersView.el);
			teamPlayers.fetch();
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
