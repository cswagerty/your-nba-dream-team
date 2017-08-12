define(["views/team-players-view", "events"], function(TeamPlayersView, DTEvents) {

	var teamPlayersView;
	var listener;

	beforeEach(function() {
		var mockPlayers = new Backbone.Collection();

		teamPlayersView = new TeamPlayersView({
			collection: mockPlayers
		});
		listener = _.extend({}, Backbone.Events); // for listening to DTEvents event bus
	});

	describe("Team Players View", function() {

		it("should show team players when they are fetched", function(done) {
			
			listener.listenTo(teamPlayersView.collection, "sync", function() {
				expect(teamPlayersView.$el.children().length).toBe(1);
				done();
			});

			expect(teamPlayersView.$el.children().length).toBe(0);
			teamPlayersView.collection.add({});  // mocking a fetch
			teamPlayersView.collection.trigger("sync");
		});

		it("should navigate to the DreamTeamMembersView after the dream team has been updated", function(done) {

			listener.listenTo(DTEvents, "navigate", function(path) {
				expect(path).toBe("/dream-team-members");
				done();
			});

			DTEvents.trigger("dreamTeamMembers:updated");
		});

		afterEach(function() {
			listener.stopListening();
		});
	});
});