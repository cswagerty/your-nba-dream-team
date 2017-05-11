define([], function() {

	var DreamTeamView = Backbone.View.extend({

		className: "dream-team-container",

		render: function() {
			$('main').prepend('<h1>Hello Dream Team View with Grunt</h1>');
		}

	});

	return DreamTeamView;
});
