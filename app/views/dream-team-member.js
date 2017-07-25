define(["events"], function(DTEvents) {

	var DreamTeamMember = Backbone.View.extend({

		className: "dream-team-member",

		tagName: "li",
		
		template: DT.Templates["app/templates/dream-team-member.hbs"],

		events: {
			"click": "setCurrentPosition"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		setCurrentPosition: function() {
			DTEvents.trigger("position:set", this.model.get("position"));
			DTEvents.trigger("navigate", "/teams");
		}
	});

	return DreamTeamMember;
});
