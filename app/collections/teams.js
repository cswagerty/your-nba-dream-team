define([], function() {
	
	var Teams = Backbone.Collection.extend({

		url: "/api/teams"
	});

	return Teams;
});