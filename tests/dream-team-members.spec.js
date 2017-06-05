define(["collections/dream-team-members"], function(DreamTeamMembers) {

	describe("Dream Team Members Collection", function() {

		var dreamTeamMembers;

		beforeEach(function() {
			dreamTeamMembers = new DreamTeamMembers();
		});

		it("should have 5 members by default", function() {
			expect(dreamTeamMembers.length).toBe(5);
		});

		it("should create default players with correct positions", function() {
			var positions = [];
			positions = dreamTeamMembers.map(function(dreamTeamMember) {
				return dreamTeamMember.get("position");
			});
			expect(positions.toString()).toBe(["PG", "SG", "SF", "PF", "C"].toString());
		});

		it("should only create default players on fir")
	});

});

