Package.describe({
  name: 'striletskyy:builder',
  summary: 'Build mobile layout template',
  version: '0.0.1',
  git: 'https://github.com/striletskyy/Builder.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.export('Builder', 'client');
  api.addFiles('striletskyy:builder.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('striletskyy:builder');
  api.addFiles('striletskyy:builder-tests.js');
});
