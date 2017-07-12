/* 
	- Read downloaded static player data because NBA API is unstable
	- Reformat so objects are minimal and clearly labeled
*/

var players = require("../data/players.json"); 

players = players.map(function(player) { 
	var reformattedPlayer =  {
		id: player[0],
		teamId: player[7],
		name: player[2]
	}  

	return reformattedPlayer;
});

module.exports = players;