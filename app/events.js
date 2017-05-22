define([], function() {
	// create an event bus to avoid global variables
	// and fire events when users click links
	return Object.create(Backbone.Events);
});
