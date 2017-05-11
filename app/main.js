require(["views/dream-team"], function(DreamTeamView) {

	var showDreamTeamView = function() {
		var dreamTeamView = new DreamTeamView();
		dreamTeamView.render();
	};

	showDreamTeamView();
});
