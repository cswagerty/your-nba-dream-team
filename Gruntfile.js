module.exports = function(grunt) {

    grunt.initConfig({

        handlebars: {
            options: {
                namespace: "DT.Templates"
            },

            compile: {
                files: {
                    "app/templates/compiled.js": "app/templates/*.hbs"
                }
            }
        },
        
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app',
                    include: "main.js",
                    out: 'dist/main.js'
                }
            }
        },

        stylus: {
            compile: {
                files: {
                    "dist/main.css": "app/styles/main.styl"
                }
            }  
        },

        watch: {
            scripts: {
                files: "app/**/*.js",
                tasks: "requirejs"
            },

            templates: {
                files: "app/**/*.hbs",
                tasks: ["handlebars", "requirejs"]
            },
            styles: {
                files: "app/**/*.styl",
                tasks: "stylus"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // A very basic default task.
    grunt.registerTask('default', ["handlebars", "requirejs", "stylus", "watch"]);
};
