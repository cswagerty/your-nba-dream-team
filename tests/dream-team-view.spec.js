define(["views/dream-team"], function(DreamTeamView) {

	describe("Dream Team View", function() {

		var dreamTeamView = new DreamTeamView();

		it("should have dream team members", function() {
			dreamTeamView.render();
			expect(dreamTeamView.$('.dt-dream-team-member').length).toBe(5);
		});
	});
});