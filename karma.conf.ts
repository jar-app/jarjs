import webpackConfig from './webpack.config';

module.exports = (config : any) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: [],
    preprocessors: {
      'src/**/*_spec.ts': ['webpack'],
      'src/**/*_spec.tsx': ['webpack'],
      'src/**/!(*spec).ts': ['webpack', /*'coverage'*/],
      'src/**/!(*spec).tsx': ['webpack', /*'coverage'*/],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress', /*'coverage'*/],
    coverageReporter: {
        reporters: [{
        type: 'json',
        subdir: '.', 
        file: 'coverage-final.json'
      }],
      check: {
        global: {
          statements: 100,
          lines: 100,
          functions: 100,
          branches: 100
        }
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    remapIstanbulReporter: {
      src: 'coverage/coverage-final.json',
      reports: {
        html: 'coverage'
      },
      timeoutNotCreated: 1000,
      timeoutNoMoreFiles: 1000
    },
    // Dockerfile exposes this port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    concurrency: Infinity
  });
};