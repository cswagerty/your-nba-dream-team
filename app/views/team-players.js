define(["views/team-player"], function(TeamPlayerView) {

	var TeamPlayersView = Backbone.View.extend({

		className: "team-players",

		tagName: "ul",

		initialize: function() {
			this.listenTo(this.collection, "sync", this.render);
		},

		render: function() {
			this.collection.forEach(function(model) {
				var teamPlayerView = new TeamPlayerView({model: model});
				teamPlayerView.render();
				this.$el.append(teamPlayerView.el);
			}, this);
		}

	});

	return TeamPlayersView;

});
