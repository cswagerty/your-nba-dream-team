define([], function() {

	var DreamTeamView = Backbone.View.extend({

		className: "dream-team-container",

		template: DT.Templates["app/templates/dream-team.hbs"],

		render: function() {
			$("body").append(this.template());
		}

	});

	return DreamTeamView;
});
