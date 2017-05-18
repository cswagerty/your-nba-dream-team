define([], function() {
	
	var TeamPlayerView = Backbone.View.extend({

		className: "team-player",

		tagName: "li",

		template: DT.Templates["app/templates/team-player.hbs"],

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

	return TeamPlayerView

});