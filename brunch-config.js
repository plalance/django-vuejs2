exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^resources/,
                'vendor.js': /^(?!resources)/
            }
        },
        stylesheets: {
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
            "app.js": ["resources/main.js"]
        }
    },

    npm: {
        enabled: true
    },

    plugins: {
        babel: {},
    },
};