require(["templates/compiled", "views/dream-team"], function(templates, DreamTeamView) {

	var showDreamTeamView = function() {
		var dreamTeamView = new DreamTeamView();
		dreamTeamView.render();
		$("body").append(dreamTeamView.el);
	};

	showDreamTeamView();
});
