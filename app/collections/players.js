define([], function() {

	var Players = Backbone.Collection.extend({

		initialize: function(opts) {
			opts = opts || {};
			this.teamId = opts.teamId;
		},

		url: function() {
			return "/api/players/teams/" + this.teamId;
		}
	});

	return Players;
});
