module.exports = function(config) {
  config.set({
    
    basePath: '../src/app',
    frameworks: ['mocha','chai'],
    files: [
      '../../bower_components/angular/angular.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '**/*.js',
      '**/*.html',
      '../../test/unit/**/*.js'
    ],

    preprocessors: {
      '**/*.html': "ng-html2js"
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'ngTemplates' 
    },

    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai'
    ],
    
    singleRun: true
  });
};
