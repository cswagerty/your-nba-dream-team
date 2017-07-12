define([], function() {

	var Player = Backbone.Model.extend({

		defaults: {
			id: undefined,
			city: undefined,
			name: undefined,
			abbreviation: undefined
		}
	});

	return Player;

});
