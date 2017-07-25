define(["router", "events"], function(Router, DTEvents) {
	
	var router;

	beforeEach(function() {
		router = new Router();
	});

	describe("Router", function() {

		xit("show navigate when the DTEvents navigate event is fired", function() {
			spyOn(router, "navigate");
			DTEvents.trigger("navigate", {path: "yellow-brick-road"});
			expect(router.navigate).toHaveBeenCalledWith("yellow-brick-road", {trigger: true});
		});
	});

});