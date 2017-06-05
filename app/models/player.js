define([], function() {

	var Player = Backbone.Model.extend({

		defaults: {
			id: undefined,
			teamId: undefined,
			name: ""
		}
	});

	return Player;

});
