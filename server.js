var express = require('express');
var app = express();

var players = require('./api/players');
var teams = require('./api/teams');

// API routes
var apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("/teams", function(req, res) {
	res.json(teams);
});

apiRouter.get("/players/team/:teamId", function(req, res) {
	
	var teamId = req.params.teamId;
	var teamPlayers = players.filter(function(player) {

		return player.teamId.toString() === teamId;
	});

	res.json(teamPlayers);
});

//Static routes
app.get(['/', "/dream-team"], function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("."));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server started on port ' + port);
});
