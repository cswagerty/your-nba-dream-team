define(["collections/players"], function(Players) {

	describe("Players Collection", function() {

		it("should fetch from an API enpoint generated from the teamId property", function() {
			var players = new Players({teamId: 42});
			var apiPath = "/api/players/teams/";
			expect(players.url()).toBe(apiPath + 42);
		});
	});
});