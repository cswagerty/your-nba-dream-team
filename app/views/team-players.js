define(["views/team-player", "events"], function(TeamPlayerView, DTEvents) {

	var TeamPlayersView = Backbone.View.extend({

		className: "team-players",

		tagName: "ul",

		initialize: function() {
			this.listenTo(this.collection, "sync", this.render);
			this.listenTo(DTEvents, "dreamTeam:updated", this.handleDreamTeamUpdated);
		},

		render: function() {
			this.collection.forEach(function(model) {
				var teamPlayerView = new TeamPlayerView({model: model});
				teamPlayerView.render();
				this.$el.append(teamPlayerView.el);
			}, this);
		},

		handleDreamTeamUpdated: function() {
			DTEvents.trigger("navigate", "/my-team");
		}
	});

	return TeamPlayersView;

});
