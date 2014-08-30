/**
 * OAuthUsersController
 *
 * @description :: Server-side logic for managing Oauthusers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	current: function(req,res){
        res.json({current:req.user});
    }
};

