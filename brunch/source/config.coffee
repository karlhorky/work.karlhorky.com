exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'scripts/app.js': /^app|node_modules/
      order:
        # Files in `vendor` directories are compiled before other files
        # even if they aren't specified in order.before.
        before: [
          'node_modules/zenscroll/zenscroll-min.js'
        ]
    stylesheets:
      joinTo:
        'styles/app.css'
      order:
        before: [
          'vendor/styles/normalize.css'
        ]
  paths:
    public: 'public'
