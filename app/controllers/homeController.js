function DefaultController(server) {
	//todo: default.html
	server.get("/", function(req, res) {
		res.end("<head>" + "<title>SocialMedic | Home</title>" + "</head>" +
			"<header><h1>SocialMedic</h1></header>");
	})
	
	//todo: default.html
	server.get("/api", function (req, res) {
		res.end("<head>" + "<title>SocialMedic | API</title>" + "</head>");
	});
};

module.exports.init = function (server) {
	return new DefaultController(server);
};