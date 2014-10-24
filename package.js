Package.describe({
  name: 'striletskyy:builder',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('striletskyy:builder.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('striletskyy:builder');
  api.addFiles('striletskyy:builder-tests.js');
});
