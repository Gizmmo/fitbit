/**
* OAuthAccessTokens.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    //connection: 'oauth',

    attributes: {
        accessToken: {
            type: 'string',
            unique: true
        },
        userId: {
            type: 'string',
        }

    }
};
