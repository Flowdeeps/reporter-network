'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "**/*.less",
            tasks: ["less"]
        },
        // browserSync
        browserSync: {
            bsFiles: {
                src : 'assets/css/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["assets/less/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "assets/css/main.css": "assets/less/main.less"
                }
            },
        },
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['browserSync','watch']);
};
