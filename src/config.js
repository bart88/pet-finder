var config = {};

config.port = 3000;

config.facebook = {
  appId:          process.env.FACEBOOK_APPID          || '1668433980109240',
  appSecret:      process.env.FACEBOOK_APPSECRET      || 'f8a33a0e8685e4e7165862864f394203'
};


module.exports = config;
