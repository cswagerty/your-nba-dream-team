define(["views/team"], function(TeamView) {
	
	var TeamsView = Backbone.View.extend({

		className: "teams-view",

		tagName: "ul",

		initialize: function() {
			this.listenTo(this.collection, "sync", this.render);
		},

		render: function() {
			this.collection.forEach(function(model) {
				var teamView = new TeamView({model: model});
				teamView.render();
				this.$el.append(teamView.el);
			}, this);	
		}
	});

	return TeamsView;
});