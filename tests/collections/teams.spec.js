define(["collections/teams"], function(Teams) {

	describe("Teams Collection", function() {

		it("should fetch from the correct API endpoint", function() {
			var teams = new Teams();
			var expectedApiPath = "/api/teams";
			expect(teams.url).toBe(expectedApiPath);
		});
	});
});