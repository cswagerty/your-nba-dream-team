define(["models/dream-team-member"], function(DreamTeamMember) {

	describe("Dream Team Member Model", function() {

		it("should have the correct properties by default", function() {
			var dreamTeamMember = new DreamTeamMember();
			var expectedProperties = [
				"id", // unique player id
				"teamId", // unique team id
				"name", // player's first and last name
				"position" //position on user's dream team
			];

			var defaultProperties = Object.keys(dreamTeamMember.toJSON()).toString();
			expect(defaultProperties.toString()).toBe(expectedProperties.toString());
		});
	});
});