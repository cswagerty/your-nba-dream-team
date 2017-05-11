module.exports = function(grunt) {

    grunt.initConfig({
        
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app',
                    include: ['main.js'],
                    out: 'dist/main.js'
                }
            }
        },

        watch: {
            scripts: {
                files: ["app/**/*.js"],
                tasks: ["default"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // A very basic default task.
    grunt.registerTask('default', ["requirejs", "watch"]);
};
