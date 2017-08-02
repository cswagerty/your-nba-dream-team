define(["collections/dream-team-members", "events", "models/dream-team-member"], 
		function(DreamTeamMembers, DTEvents, DreamTeamMember) {

	describe("Dream Team Members Collection", function() {

		var dreamTeamMembers;
		var defaultPositions;
		var listener;

		beforeEach(function() {
			dreamTeamMembers = new DreamTeamMembers();
			defaultPositions = ["PG", "SG", "SF", "PF", "C"];
			listener = _.extend({}, Backbone.Events);
		});

		it("should have 5 placeholder dream team members", function() {
			expect(dreamTeamMembers.length).toBe(5);
		});

		it("should only create placeholder dream team members if no members exist", function() {
			dreamTeamMembers = new DreamTeamMembers([{name: "Some Random Dude"}]);
			expect(dreamTeamMembers.length).toBe(1);
		});

		it("should create placeholder players with correct positions", function() {
			defaultPositions.forEach(function(defaultPosition) {
				expect(dreamTeamMembers.find({position: defaultPosition})).toBeDefined();
			});
		});

		it("should add dream team members", function(done) {
			dreamTeamMembers.reset();
			expect(dreamTeamMembers.length).toBe(0);

			// must use done() because of async event
			listener.listenTo(dreamTeamMembers, "update", function() {
				expect(dreamTeamMembers.length).toBe(1);
				expect(dreamTeamMembers.find({name: "Michael Jordan"})).toBeDefined();
				done();
			});

			dreamTeamMembers.addDreamTeamMembers({name: "Michael Jordan"});
		});

		it("should update dream team members", function(done) {
			var newlySelectedPlayer = {
				name: "Newly Selected",
				position: "PF"
			};

			listener.listenTo(dreamTeamMembers, "change", function() {
				expect(dreamTeamMembers.find(newlySelectedPlayer)).toBeDefined();
				expect(dreamTeamMembers.length).toBe(5);
				done();
			});

			DTEvents.trigger("dreamTeamMembers:update", newlySelectedPlayer);
		});

		it("should trigger dreamTeamMembers:updated event when a dream team member is updated", function() {
			var triggerEvent = spyOn(DTEvents, "trigger");

			dreamTeamMembers.handleDreamTeamMembersUpdateEvent({position: "PG"});
			expect(triggerEvent).toHaveBeenCalledWith("dreamTeamMembers:updated");
		});

		afterEach(function() {
			listener.stopListening();
			dreamTeamMembers.reset();
		});
	});

});

