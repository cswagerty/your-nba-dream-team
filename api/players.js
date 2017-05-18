// read static data because NBA API is unstable and reformat 
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