define(["events"], function(DTEvents) {

	var DreamTeamMember = Backbone.View.extend({

		className: "dream-team-member",

		tagName: "li",
		
		template: DT.Templates["app/templates/dream-team-member.hbs"],

		events: {
			"click": "handleClick"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		handleClick: function() {
			this.setPosition();
			this.navigateToTeamsList();
		},

		setPosition: function() {
			DTEvents.trigger("position:set", this.model.get("position"));
		},

		navigateToTeamsList: function() {
			DTEvents.trigger("navigate", "/teams");
		}
	});

	return DreamTeamMember;
});
