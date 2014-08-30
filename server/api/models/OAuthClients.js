/**
 * OAuthClients.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var bcrypt = require('bcrypt-nodejs');
module.exports = {

  //  connection: 'oauth',

    attributes: {

        clientId: {
            type: 'string'
        },

        clientSecret: {
            type: 'string'
        },

        toJSON: function() {
            var obj = this.toObject();
            // Remove the secret object value
            delete obj.clientSecret;
            // return the new object without secret
            return obj;
        }
    },

    /**
     * Callback to be run before creating a Client.
     *
     * @param {Object}   client The soon-to-be-created Client
     * @param {Function} next
     */
    beforeCreate: function(client, next) {
        if (client.hasOwnProperty('clientSecret')) {
            client.clientSecret = bcrypt.hashSync(client.clientSecret, bcrypt.genSaltSync(10));
            next(false, client);

        } else {
            next(null, client);
        }
    },

    /**
     * Callback to be run before updating a Client.
     *
     * @param {Object}   client Values to be updated
     * @param {Function} next
     */
    beforeUpdate: function(client, next) {
        if (client.hasOwnProperty('clientSecret')) {
            client.clientSecret = bcrypt.hashSync(client.clientSecret, bcrypt.genSaltSync(10));
            next(false, client);
        } else {
            next(null, client);
        }
    }

};
