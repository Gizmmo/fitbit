/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {

      userId : { type: 'string', unique: true },

      accessToken: {type: 'string'},

      secretToken: {type: 'string'},

      name : { type: 'string' },

    avatar : { type: 'string' },

    gender: { type : 'string' },

    country: { type : 'string' },

    height: { type: 'string' },

    weight: { type: 'string' },

    heightUnit: { type: 'string' },

    weightUnit: { type: 'string' }

  }
};
