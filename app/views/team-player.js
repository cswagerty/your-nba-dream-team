define(["events"], function(DTEvents) {
	
	var TeamPlayerView = Backbone.View.extend({

		className: "team-player",

		tagName: "li",

		template: DT.Templates["app/templates/team-player.hbs"],

		events: {
			"click": "handleClick"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		handleClick: function() {
			this.listenToOnce(DTEvents, "position:return", this.handlePositionReturn);
			this.getActivePosition();
		},

		getActivePosition: function() {
			DTEvents.trigger("position:get");
		},
		
		handlePositionReturn: function(position) {
			var newDreamTeamMember = _(this.model.toJSON()).extend({position: position});
			DTEvents.trigger("dreamTeamMembers:update", newDreamTeamMember);	
		},
	});

	return TeamPlayerView

});