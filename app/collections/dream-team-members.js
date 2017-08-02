define(["models/dream-team-member", "events"], function(DreamTeamMember, DTEvents) {

	var DreamTeamMembers = Backbone.Collection.extend({

		model: DreamTeamMember,

		positions: ["PG", "SG", "SF", "PF", "C"],

		initialize: function() {
			this.listenTo(DTEvents, "dreamTeamMembers:add", this.handleDreamTeamMembersAddEvent);
			this.listenTo(DTEvents, "dreamTeamMembers:update", this.handleDreamTeamMembersUpdateEvent);
			this.createPlaceholderDreamTeamMembers(this.positions);
		},

		// handle the blank state where the user hasn't 
		// picked any members for their dream team
		createPlaceholderDreamTeamMembers: function(positions) {
			if (!this.length) {	
				var placeholderDreamTeamMembers = [];
				
				placeholderDreamTeamMembers = positions.map(function(position) {
					return {position: position};
				});

				this.addDreamTeamMembers(placeholderDreamTeamMembers);		
			}
		},

		/* expects a DreamTeamMember object or array */
		addDreamTeamMembers: function(dreamTeamMembers) {
			// using the dreamTeamMembers:add event instead of adding 
			// directly to create a common interface for adding
			// dream team members
			DTEvents.trigger("dreamTeamMembers:add", dreamTeamMembers);	
		},

		handleDreamTeamMembersAddEvent: function(newDreamTeamMembers) {
			this.add(newDreamTeamMembers);
		},

		handleDreamTeamMembersUpdateEvent: function(player) {
			this.findWhere({position: player.position}).set(player);
			DTEvents.trigger("dreamTeamMembers:updated");
		}
	});

	return DreamTeamMembers;

});