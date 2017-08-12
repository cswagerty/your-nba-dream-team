define(["views/team-view", "events"], function(TeamView, DTEvents) {

	var teamView;
	var listener;

	beforeEach(function() {
		var mockPlayer = new Backbone.Model({
			id: 8675309
		});

		teamView = new TeamView({
			model: mockPlayer
		});

		listener = _.extend({}, Backbone.Events); // for listening to DTEvents event bus
	});

	describe("Team View", function() {

		it("should navigate to a team's player list when clicked", function(done) {
			listener.listenTo(DTEvents, "navigate", function(path) {
				expect(path).toBe("/players/teams/8675309");
				done();
			});

			teamView.$el.click();
		});

		afterEach(function() {
			listener.stopListening();
		});
	});
});