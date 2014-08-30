/**
 * OAuthUsersController
 *
 * @description :: Server-side logic for managing Oauthusers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	current: function(req,res){
        res.json({current:req.user});
    },
    getUserId: function(req,res){
    	OAuthToken.findAll().done(function(err,id){
    		res.view({
    			ids: id
    		})
    	})
    }
};
