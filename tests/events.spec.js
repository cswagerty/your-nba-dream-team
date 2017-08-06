define(["events"], function(DTEvents) {

	describe("DTEvents Event Bus", function() {

		it("should fire custom events", function() {
			var listener = Object.create(Backbone.Events);
			var spy = spyOn(listener, "trigger");
			
			listener.listenTo(DTEvents, "custom:event", function() {
				this.trigger("custom event fired!");
			});
			DTEvents.trigger("custom:event");

			expect(spy).toHaveBeenCalledTimes(1);
			expect(spy).toHaveBeenCalledWith("custom event fired!");
		});
	});
});