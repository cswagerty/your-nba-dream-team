define(["models/player"], function(Player) {

	var DreamTeamMember = Player.extend({

		defaults: function() {
			// a DreamTeamMember model contains the same attributes
			// as Player model plus the "position" property
			// so just inherit all properties from the Player model
			var defaults = {};
			defaults = _.clone(Player.prototype.defaults);
			_(defaults).extend({position: undefined});
			return defaults;
		}
	});

	return DreamTeamMember;

});