exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'scripts/app.js': /^app|node_modules/,
      },
      order: {
        before: ['node_modules/zenscroll/zenscroll-min.js'],
      },
    },
    stylesheets: {
      joinTo: 'styles/app.css',
      order: {
        before: ['vendor/styles/normalize.css'],
      },
    },
  },
  paths: {
    public: 'public',
  },
};
