'use strict';

module.exports = {

  identity: 'notifications',
  tableName: 'notifications',

  connection: 'api',

  attributes: {
    text: {
      type: 'string',
      required: true
    },
    // belongs to
    userId: {
      type: 'string',
      model: 'users',
      required: true
    }
  },

  autoPK: true,

  autoCreatedAt: true,
  autoUpdatedAt: true
};
