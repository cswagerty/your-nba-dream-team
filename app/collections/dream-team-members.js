define(["models/dream-team-member"], function(DreamTeamMember) {

	var DreamTeamMembers = Backbone.Collection.extend({

		model: DreamTeamMember,

		positions: ["PG", "SG", "SF", "PF", "C"],

		initialize: function() {
			var players = this.createDreamTeamPlayers();
			this.set(this.createDreamTeamPlayers());
		},

		createDreamTeamPlayers: function() {
			var dreamTeamPlayers = this.positions.map(function(position) {
				return {position: position};
			});

			return dreamTeamPlayers;
		}

	});

	return DreamTeamMembers;

});