define(["models/team"], function(Team) {

	describe("Team Model", function() {

		it("should have the correct properties by default", function() {
			var team = new Team();
			var expectedProperties = [
				"id",  // city's unique id
				"city", // city name
				"name", // team name i.e. "Warriors"
				"abbreviation" // used to build paths to logo images
			];

			var defaultProperties = Object.keys(team.toJSON()).toString();
			expect(defaultProperties.toString()).toBe(expectedProperties.toString());
		});
	});
});