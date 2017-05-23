define(["views/dream-team", "views/teams", 
	"collections/teams", "views/team-players", "collections/players", "events"], 
	function(DreamTeamView, TeamsView, Teams, TeamPlayersView, Players, DTEvents) {

	var DreamTeamRouter = Backbone.Router.extend({

		initialize: function() {
			this.listenTo(DTEvents, "link:click", this.handleLinkClick);
		},

		routes: {
			"": "showDreamTeamView",
			"my-team": "showDreamTeamView",
			"teams": "showTeams",
			"players/teams/:teamId": "showTeamPlayers"
		},

		showDreamTeamView: function() {
			var dreamTeamView = new DreamTeamView();
			dreamTeamView.render();
			$("section.main-content").html(dreamTeamView.el);
		},

		showTeams: function() {
			var teams = new Teams();
			var teamsView = new TeamsView({collection: teams});
			$("section.main-content").html(teamsView.el);
			teams.fetch();
		},

		showTeamPlayers: function(teamId) {
			var teamPlayers = new Players({teamId: teamId});
			var teamPlayersView = new TeamPlayersView({collection: teamPlayers});
			$("section.main-content").html(teamPlayersView.el);
			teamPlayers.fetch();
		},

		handleLinkClick: function(opts) {
			opts = opts || {};
			this.navigate(opts.path, {trigger: true});
		}
	});

	return DreamTeamRouter;

});