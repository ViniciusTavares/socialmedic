var home = require("../../app/controllers/homeController");
// var users = require("./app/controllers/usersController");
// var doctors = require("./app/controllers/doctorsController");

var settedRoutes = function (server) {
	home.init(server);
	// users.init(server);
	// doctors.init(server);
};

module.exports.init = function (server) {
	return settedRoutes(server);
}