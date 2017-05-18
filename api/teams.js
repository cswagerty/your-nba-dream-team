/*
	Create a list of NBA teams without duplicates
	from player data
*/

var players = require('../data/players');

var teams = [];

var teamAlreadyAdded = function(player) {
	return teams.some(function(team) {
		return player[7] === team.id;
	});
};

var hasTeam = function(player) {
	return !!player[7];
};

var createTeam = function(player) {
	var team = {
		id: player[7],
		city: player[8],
		name: player[9],
		abbreviation: player[10]
	};

	return team;
};

players.forEach(function(player) {
	// don't add team if it has already been added
	if(!teamAlreadyAdded(player) && hasTeam(player)) {
		var team = createTeam(player);
		teams.push(team);
	}
});

module.exports = teams;

