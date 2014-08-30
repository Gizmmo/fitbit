/**
 * OAuthUsers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var bcrypt = require('bcrypt-nodejs');
module.exports = {

  //  connection: 'oauth',

    attributes: {
        username: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        firstname: {
            type: 'string'
        },
        lastname: {
            type: 'string'
        },


        /**
         * Compare password
         *
         * @param {string}   password The password to compare
         * @param {Function} next
         */
        comparePassword: function(password) {
            bcrypt.compareSync(password, this.password);
        },
        /**
         * Serialize to JSON
         */
        toJSON: function() {
            var obj = this.toObject();
            // Remove the password object value
            delete obj.password;
            // return the new object without password
            return obj;
        }

    },

    /**
     * Callback to be run before creating a User.
     *
     * @param {Object}   user The soon-to-be-created User
     * @param {Function} next
     */
    beforeCreate: function(user, next) {
        if (user.hasOwnProperty('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            next(false, user);

        } else {
            next(null, user);
        }
    },

    /**
     * Callback to be run before updating a User.
     *
     * @param {Object}   user Values to be updated
     * @param {Function} next
     */
    beforeUpdate: function(user, next) {
        if (user.hasOwnProperty('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            next(false, user);
        } else {
            next(null, user);
        }
    }

};
