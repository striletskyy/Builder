Package.describe({
  name: 'striletskyy:builder',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/striletskyy/Builder.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('striletskyy:builder.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('striletskyy:builder');
  api.addFiles('striletskyy:builder-tests.js');
});
