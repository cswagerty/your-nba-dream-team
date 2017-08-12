define(["events"], function(DTEvents) {

	var TeamView = Backbone.View.extend({

		className: "team",

		tagName: "li",

		template: DT.Templates["app/templates/team.hbs"],

		events: {
			"click": "handleTeamClick"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		handleTeamClick: function() {
			var path = this.getTeamPlayersPath();
			this.navigateToTeamPlayersList(path);
		},

		getTeamPlayersPath: function() {
			return "/players/teams/" + this.model.get("id");
		},

		navigateToTeamPlayersList: function(path) {
			DTEvents.trigger("navigate", path);
		}
	});

	return TeamView;

});