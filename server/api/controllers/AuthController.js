/**
 * FitBitController
 *
 * @description :: Server-side logic for managing Fitbits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
var jwt = require('jsonwebtoken');

module.exports = {
	index: function(req, res) {
		console.log(req.param('oauth_token'));
	},

	fitbit: function (req, res) {
	  passport.authenticate('fitbit',function (err, tokenInfo) {

                if(err){
                	console.log(err);
                	res.send(err);
                } else {
                	console.log("Yehaw")
                	res.send(tokenInfo);
                	// res.redirect('http://localhost:9000/#/' + tokenInfo.accessToken);
                }
	      })(req, res);
	},

	callback: function( req, res, next) {
		userId = 1;
		var userToken = req.query['oauth_token'];
		var month = 43829;
		var server_token = jwt.sign({id: userId}, process.env.SECRET|| "secret", { expiresInMinutes: month});
		res.redirect('?oauth_token=' + server_token+ "&userId=" + userId)
		// res.redirect('?')
	},

	logout: function(req,res){
		req.logout();
		res.redirect('http://127.0.0.1:9000');
	},
};

