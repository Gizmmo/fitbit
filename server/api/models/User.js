/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'flapp2',
  attributes: {

      uid : { type: 'string', unique: true },

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
