define(["models/player"], function(Player) {

	var DreamTeamMember = Player.extend({

		defaults: function() {
			// a DreamTeamMember contains the same attributes
			// as Player plus the "position" property
			var defaults = {};
			defaults = _.clone(Player.prototype.defaults);
			defaults.position = "";
			return defaults;
		}

	});

	return DreamTeamMember;

});