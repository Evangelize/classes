let expiresIn = 86400000,
    privacy = 'public';

module.exports = [
  {
    method: 'GET',
    path: '/dist/{param*}',
    handler: {
      directory: {
        path: __dirname+'/../static/dist'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  },
  {
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: __dirname+'/../static/images'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  },
  {
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
      directory: {
        path: __dirname+'/../static/fonts'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  },
  {
    method: 'GET',
    path: '/material/css/{param*}',
    handler: {
      directory: {
        path:  __dirname+'/../node_modules/material-design-lite'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  },
  {
    method: 'GET',
    path: '/chartist/css/{param*}',
    handler: {
      directory: {
        path:  __dirname+'/../node_modules/chartist/dist/'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  },
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path:  __dirname+'/../src/css/'
      }
    },
    config: {
      cache: {
        expiresIn: expiresIn,
        privacy: privacy
      }
    }
  }
];
