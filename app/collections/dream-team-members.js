define(["models/dream-team-member"], function(DreamTeamMember) {

	var DreamTeamMembers = Backbone.Collection.extend({

		model: DreamTeamMember,

		positions: ["PG", "SG", "SF", "PF", "C"],

		initialize: function() {
			var defaultDreamTeamMembers = this.createDefaultDreamTeamMembers(this.positions);
		},

		createDefaultDreamTeamMembers: function(positions) {
			var defaultDreamTeamMembers = [];
			positions.forEach(function(position) {
				defaultDreamTeamMembers.push({position: position});
			});

			this.add(defaultDreamTeamMembers);
		}
	});

	return DreamTeamMembers;

});