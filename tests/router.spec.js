define(["router", "events"], function(Router, DTEvents) {
	
	var router;

	beforeEach(function() {
		router = new Router();
	});

	describe("Router", function() {

		it("show navigate when the link:click event is fired", function() {
			spyOn(router, "navigate");
			DTEvents.trigger("link:click", {path: "yellow-brick-road"});
			expect(router.navigate).toHaveBeenCalledWith("yellow-brick-road", {trigger: true});
		});
	});

});