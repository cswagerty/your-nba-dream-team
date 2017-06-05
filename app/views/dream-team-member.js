define([], function() {

	var DreamTeamMember = Backbone.View.extend({

		className: "dream-team-member",

		tagName: "li",
		
		template: DT.Templates["app/templates/dream-team-member.hbs"],

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

	return DreamTeamMember;
});
