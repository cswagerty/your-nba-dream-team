define(["views/dream-team-member-view"], function(DreamTeamMemberView) {

	var DreamTeamView = Backbone.View.extend({

		className: "dream-team-members",

		tagName: "ul",

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
