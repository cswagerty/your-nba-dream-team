define([], function() {

	var TeamView = Backbone.View.extend({

		className: "team-view",

		tagName: "li",

		template: DT.Templates["app/templates/team.hbs"],

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

	return TeamView;

});