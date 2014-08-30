/**
* Token.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
		accessToken: {
			type: 'string',
			unique: true,
			required: true
		},
		userId: {
			type: 'string',
			required: true,
		},
      	oauth_token : { 
      		type: 'string', 
      		unique: true 
      	},

      	oauth_verifier: { 
      		type: 'string' 
      	},

		toJSON: function() {
			var obj = this.toObject();
			return obj;
		}
	}
};

