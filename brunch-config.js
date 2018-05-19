exports.config = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        stylesheets: {
            defaultExtensions: 'scss',
            joinTo: {
                'app.css': /^resources/,
            }
        },
        templates: {
            joinTo: 'app.js'
        }
    },

    // Django paths
    paths: {
        watched: [
            'resources',
        ],
        public: 'static'
    },

    // Automatically require modules
    modules: {
        autoRequire: {
            "app.js": ["static/js/main"]
        }
    },

    npm: {
        enabled: true
    },
};