define(["views/dream-team-members-view", "events"], function(DreamTeamMembersView) {

	var dreamTeamMembersView;

	beforeEach(function() {
		var mockDreamTeamMembers = new Backbone.Collection([{}, {}]);

		dreamTeamMembersView = new DreamTeamMembersView({
			collection: mockDreamTeamMembers
		});
	});

	describe("Dream Team Members View", function() {

		it("should create child views for each DreamTeamMember", function() {
			dreamTeamMembersView.render();
			expect(dreamTeamMembersView.$el.children().length).toBe(2);
		});
	});
});