define(["collections/dream-team-members", "views/dream-team-members", "views/teams", 
	"collections/teams", "views/team-players", "collections/players", "events"], 
	function(DreamTeamMembers, DreamTeamView, TeamsView, Teams, TeamPlayersView, Players, DTEvents) {

	var DreamTeamRouter = Backbone.Router.extend({

		initialize: function() {
			this.listenTo(DTEvents, "navigate", this.handleNavigateEvent);
			this.listenTo(DTEvents, "position:set", this.setPosition);	
			this.listenTo(DTEvents, "position:get", this.sendPosition);		
		},

		routes: {
			"": "showDreamTeamMembers",
			"dream-team-members": "showDreamTeamMembers",
			"teams": "showTeams",
			"players/teams/:teamId": "showTeamPlayers"
		},

		mainElSelector: "section.main-content",

		getMainEl: function() {
			return $(this.mainElSelector).get(0);
		},

		showDreamTeamMembers: function() {
			if (!this.dreamTeamMembers) {
				this.dreamTeamMembers = new DreamTeamMembers();
			}
			var dreamTeamView = new DreamTeamView({collection: this.dreamTeamMembers});
			dreamTeamView.render();
			this.showView(dreamTeamView.el);
		},

		showTeams: function() {
			var teams = new Teams();
			var teamsView = new TeamsView({collection: teams});
			this.showView(teamsView.el);
			teams.fetch();
		},

		showTeamPlayers: function(teamId) {
			var teamPlayers = new Players({teamId: teamId});
			var teamPlayersView = new TeamPlayersView({collection: teamPlayers});
			this.showView(teamPlayersView.el);
			teamPlayers.fetch();
		},

		// adds a given view.el to dom
		showView: function(el) {
			$(this.getMainEl()).html(el);
		},

		handleNavigateEvent: function(path) {
			path = path || "/";
			this.navigate(path, {trigger: true});
		},

		setPosition: function(position) {
			this.position = position; 
		},

		sendPosition: function() {
			// HACK: For some reason position:return fires before
			// position: get even though one calls the other
			var self = this;
			setTimeout(function() { 
				DTEvents.trigger("position:return", self.position);
			}, 10);
		}
	});

	return DreamTeamRouter;

});