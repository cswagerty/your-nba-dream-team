define(["router", "events"], function(Router, DTEvents) {
	
	var router;
	var mainEl;
	var $mainEl;
	var listener;

	beforeEach(function() {
		router = new Router();

		$mainEl = $('<section class="main-test"></section>');
		mainEl = $mainEl.get(0);
		
		router.getMainEl = function() {
			return mainEl;
		};

		listener = _.extend({}, Backbone.Events);
	});

	describe("Router", function() {

		it("should show a view", function() {

			var viewEl = $('<div class="some-view"></div>').get(0);
			router.showView(viewEl);

			expect($mainEl.children(".some-view").length).toBe(1);
		});

		it("should navigate to path when navigate event is fired on the event bus", function() {

			listener.listenTo(router, "navigate");
			var navigateFunction = spyOn(router, "navigate");

			DTEvents.trigger("navigate", "/some-path");

			expect(navigateFunction).toHaveBeenCalled();
		});

		it("should show the DreamTeamMembersView", function() {
			router.showDreamTeamMembers();

			expect($(router.getMainEl()).children(".dream-team-members").length).toBe(1);
		});

		it("should only create default dream team members if none exist", function() {
			router.showDreamTeamMembers();

			expect($mainEl.find(".dream-team-member").length).toBe(5);

			// if a user has added a member to their dream team
			router.dreamTeamMembers = new Backbone.Collection([{name: "Charles Barkley"}]);

			router.showDreamTeamMembers();
			expect($mainEl.find(".dream-team-member").length).toBe(1);
		});

		it("should show the TeamsView", function() {
			router.showTeams();
			expect($mainEl.children(".teams").length).toBe(1);
		});

		it("should show the TeamsPlayersView", function() {
			router.showTeamPlayers();
			expect($mainEl.children(".team-players").length).toBe(1);
		});

		it("should set the position when the position:set event is fired", function() {
			DTEvents.trigger("position:set", "some position");
			expect(router.position).toBe("some position");
		});

		it("should return the in progress position when position:get is called", function(done) {
			DTEvents.trigger("position:set", "an awesome position");
			var returnedPosition;
			
			listener.listenTo(DTEvents, "position:return", function(position) {
				returnedPosition = position;
				expect(returnedPosition).toBe("an awesome position");
				done();
			});

			DTEvents.trigger("position:get");
		});
	});

	afterEach(function() {
		listener.stopListening();
	});

});