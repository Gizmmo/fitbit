/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var jwt = require('jsonwebtoken');
var FitbitApiClient = require("fitbit-node")
var APP_ID = 'c5765ab681034ec2a9e3e6f4f4440c1d',
    APP_SECRET = '299e3c0450ed4a088edd93790549cba4';

module.exports = {

  profile: function (req, res) {
    var client = new FitbitApiClient(APP_ID, APP_SECRET);
    jwt.verify(req.param('userId'), "TravisAwesome", function (err, decoded) {
      userId = decoded.id;
      User.findOne({'userId': userId}).exec(function(err, user) {
        if (err) {
          res.json({error: err});
        } else {
          client.requestResource('/profile.json', "GET", user.accessToken, user.secretToken).then(function(results) {
            res.send(results[0]);
          })
        }
      });
    });
  }
};

