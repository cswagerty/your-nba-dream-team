define(["views/dream-team-member-view", "events"], function(DreamTeamMemberView, DTEvents) {

	var dreamTeamMemberView;
	var listener;

	beforeEach(function() {
		listener = _.extend({}, Backbone.Events); // for listening to DTEvents event bus

		var mockDreamTeamMember = new Backbone.Model({
			position: "SF"
		});
		dreamTeamMemberView = new DreamTeamMemberView({
			model: mockDreamTeamMember
		});
	});

	describe("Dream Team Member View", function() {

		it("should set the position the user is choosing when a Dream Team Member is clicked", function(done) {
			listener.listenTo(DTEvents, "position:set", function(position) {
				expect(position).toBe("SF");
				done();
			});

			dreamTeamMemberView.$el.click();
		});

		it("should navigate to the teams page when a Dream Team Member is clicked", function(done) {
			listener.listenTo(DTEvents, "navigate", function(path) {
				expect(path).toBe("/teams");
				done();
			});
			
			dreamTeamMemberView.$el.click();
		});
	});

	afterEach(function() {
		listener.stopListening();
	});	
});