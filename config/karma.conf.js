var webpackConfig = require('./webpack.test');
module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: true}
    ],

    preprocessors: {
    './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    
    reporters: ["progress","coverage"],
    coverageReporter: {
      dir : "coverage/",
      reporters: [
        { type: "text-summary" },
        { type: "json" },
        { type: "html" }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
