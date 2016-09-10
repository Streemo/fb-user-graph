Package.describe({
  name: 'streemo:fb-user-graph',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple utility for getting fb user profile information.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Streemo/fb-user-graph.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript','http'], 'server')
  api.mainModule('graph.js', 'server');
});

Npm.depends({
  querystring: "0.20.0"
})