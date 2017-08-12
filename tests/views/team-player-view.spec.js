define(["views/team-player-view", "events"], function(TeamPlayerView, DTEvents) {

	var teamPlayerView;
	var listener;

	beforeEach(function() {
		var mockPlayer = new Backbone.Model({
			name: "Steph Curry"
		});

		teamPlayerView = new TeamPlayerView({
			model: mockPlayer
		});
		listener = Object.create(Backbone.Events); // for listening to DTEvents event bus
	});

	describe("Team Player View", function() {

		it("should get the current position when a user selects a player", function(done) {
			listener.listenTo(DTEvents, "position:return", function(position) {
				expect(position).toBe("PF");
				done();
			});

			DTEvents.trigger("position:set", "PF");
			teamPlayerView.$el.click();
		});

		it("should update the user's dream team with the newly selected player", function(done) {
			listener.listenTo(DTEvents, "dreamTeamMembers:updated", function(player) {
				expect(player.name).toBe("Steph Curry");
				done();
			});

			teamPlayerView.$el.click();
		});
	});

	afterEach(function() {
		listener.stopListening();
	});
});