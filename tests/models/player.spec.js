define(["models/player"], function(Player) {

	describe("Player Model", function() {

		it("should have the correct properties by default", function() {
			var player = new Player();
			var expectedProperties = [
				"id", // unique player id
				"teamId", // unique team id
				"name" // player's first and last name,
			];

			var defaultProperties = Object.keys(player.toJSON()).toString();
			expect(defaultProperties.toString()).toBe(expectedProperties.toString());
		});
	});
});