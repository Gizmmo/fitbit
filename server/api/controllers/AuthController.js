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
		console.log("ht");
	  passport.authenticate('fitbit',function (err, tokenInfo) {

                if(err){
                	console.log(err);
                	res.send(err);
                } else {
                	console.log("Hit Callback");
                	userId = tokenInfo.userId;
					var userToken = req.query['oauth_token'];
					var month = 43829;
					var server_token = jwt.sign({id: userId}, "TravisAwesome", { expiresInMinutes: month});
					// res.redirect('http://127.0.0.1:9000/#/profile' + '?oauth_token=' + server_token+ "&userId=" + userId)
                	res.json({
                		oauth_token: server_token,
                		userId: userId
                	})
                }
	      })(req, res);
	},

	logout: function(req,res){
		req.logout();
		res.redirect('http://127.0.0.1:9000');
	},
};

