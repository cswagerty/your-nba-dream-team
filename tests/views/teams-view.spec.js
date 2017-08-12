define(["views/teams-view", "events"], function(TeamsView) {

	var teamsView;
	var listener;

	beforeEach(function() {
		var mockTeams = new Backbone.Collection();
		teamsView = new TeamsView({
			collection: mockTeams
		});

		listener = _.extend({}, Backbone.Events); // for listening to DTEvents event bus
	});

	describe("Teams View", function() {

		it("should show a list of teams once they are fetched", function(done) {
			listener.listenTo(teamsView.collection, "sync", function() {
				expect(teamsView.collection.length).toBe(1);
				done();
			});

			teamsView.collection.add({});
			teamsView.collection.trigger("sync");
		});

		afterEach(function() {
			listener.stopListening();
		});
	});
});