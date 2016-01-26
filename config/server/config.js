var app = require("restify");
var api = require("../api/config");
var server = app.createServer();

module.exports.init = function () {
	server.use(app.acceptParser(server.acceptable));
	server.use(app.queryParser());
	server.use(app.bodyParser());

	// Initialize the API on Server
	api.init(server);

	server.listen(3000, function () {
		console.log("Server is up and running on port 3000");
	});
};