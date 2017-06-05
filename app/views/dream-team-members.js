define(["views/dream-team-member"], function(DreamTeamMemberView) {

	var DreamTeamView = Backbone.View.extend({

		className: "dream-team-members",

		tagName: "ul",

		events: {
			"click .dream-team-member": "handleDreamTeamMemberClick"
		},

		render: function() {
			this.collection.forEach(function(model) {
				var dreamTeamMemberView = new DreamTeamMemberView({model: model});
				dreamTeamMemberView.render();
				this.$el.append(dreamTeamMemberView.el);
			}, this)
		}
	});

	return DreamTeamView;
});
