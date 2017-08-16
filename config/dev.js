'use strict';

module.exports = {
  env: 'development',

  product: {
    name: 'hapiSeedV2'
  },

  server: {
    hapiSeedV2: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      tls: false
    }
  },

  chairo: {
    options: {
      // prevent seneca timeout error
      // https://github.com/senecajs/seneca-transport/issues/23
      timeout: 999999999
    }
  },

  cache: {
    mainCache: {
      engine: 'catbox-memory',
      name: 'mainCache',
      partition: 'hapi-seed-v-2'
    }
  },

  dogwater: {
    connections: {
      api: {
        adapter: 'sails-mongo',
        host: 'localhost',
        port: 27017,
        database: 'api'
      }
    },
    adapters: {
      'sails-mongo': require('sails-mongo')
    },
    models: require('path').resolve(__dirname, '..', 'models')
  },

  jobs: {
    address: 'mongodb://localhost:27017/api',
    collection: 'jobs',
    frequency: '5 minutes',
    concurrency: 20
  },

  apiPrefix: '/api/v1'
};
