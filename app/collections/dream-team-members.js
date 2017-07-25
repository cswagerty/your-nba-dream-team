define(["models/dream-team-member", "events"], function(DreamTeamMember, DTEvents) {

	var DreamTeamMembers = Backbone.Collection.extend({

		model: DreamTeamMember,

		positions: ["PG", "SG", "SF", "PF", "C"],

		initialize: function() {
			this.listenTo(DTEvents, "dreamTeam:add", this.handleDreamTeamAddEvent);
			this.listenTo(DTEvents, "dreamTeam:update", this.handleDreamTeamUpdateEvent);
			var defaultDreamTeamMembers = this.createDefaultDreamTeamMembers(this.positions);
		},

		createDefaultDreamTeamMembers: function(positions) {
			if (!this.length) {	
				var defaultDreamTeamMembers = [];
				positions.forEach(function(position) {
					defaultDreamTeamMembers.push({position: position});
				});

				DTEvents.trigger("dreamTeam:add", defaultDreamTeamMembers);				
			}
		},

		handleDreamTeamAddEvent: function(newDreamTeamMembers) {
			this.add(newDreamTeamMembers);
		},

		handleDreamTeamUpdateEvent: function(player) {
			this.findWhere({position: player.position}).set(player);
			DTEvents.trigger("dreamTeam:updated");
		}
	});

	return DreamTeamMembers;

});