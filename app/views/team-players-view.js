define(["views/team-player-view", "events"], function(TeamPlayerView, DTEvents) {

	var TeamPlayersView = Backbone.View.extend({

		className: "team-players",

		tagName: "ul",

		initialize: function() {
			this.listenTo(this.collection, "sync", this.render);
			this.listenTo(DTEvents, "dreamTeamMembers:updated", this.handleDreamTeamUpdated);
		},

		render: function() {
			this.collection.forEach(function(model) {
				var teamPlayerView = new TeamPlayerView({model: model});
				teamPlayerView.render();
				this.$el.append(teamPlayerView.el);
			}, this);
		},

		handleDreamTeamUpdated: function() {
			this.showDreamTeamMembers();
		},

		showDreamTeamMembers: function() {
			DTEvents.trigger("navigate", "/dream-team-members");
		}
	});

	return TeamPlayersView;

});
