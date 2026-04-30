(function (global) {
  System.config({
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      app: 'app',

      '@angular/core': 'npm:@angular/core@2.0.0/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@2.0.0/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@2.0.0/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@2.0.0/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router@3.0.0/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms@2.0.0/bundles/forms.umd.js',

      'rxjs': 'npm:rxjs@5.0.0-beta.12',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api@0.0.20',
      'lodash': 'npm:lodash@4.16.4/lodash.js'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
