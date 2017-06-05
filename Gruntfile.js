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
                    baseUrl: "app",
                    mainConfigFile: "app/config/require-config.js",
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

        jasmine: {
            src: ["app/templates/*.js", "app/**/*.js", "!app/main.js"],
            options: {
                template: require('grunt-template-jasmine-requirejs'),
                keepRunner: true,
                specs: 'tests/**/*.spec.js',
                templateOptions: {
                    requireConfigFile: "app/config/require-config.js"
                },
                vendor: [
                    "dist/vendor/underscore.js", 
                    "dist/vendor/jquery-3.2.1.min.js",
                    "dist/vendor/backbone.js",
                    "dist/vendor/handlebars.runtime-v4.0.5.js"
                ]
            }
        },


        watch: {
            scripts: {
                files: "app/**/*.js",
                tasks: ["requirejs", "jasmine"]
            },

            templates: {
                files: "app/**/*.hbs",
                tasks: ["handlebars", "requirejs", "jasmine"]
            },
            styles: {
                files: "app/**/*.styl",
                tasks: "stylus"
            },
            tests: {
                files: "tests/*.spec.js",
                tasks: "jasmine"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // A very basic default task.
    grunt.registerTask('default', ["handlebars", "requirejs", "stylus", "jasmine", "watch"]);
};
