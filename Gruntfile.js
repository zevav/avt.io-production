module.exports = function(grunt) {
    //Initialize grunt
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app/assets/js/*.js'
            ]
        },

        uglify: {
            dist: {
                files: {
                    'dist/scripts.min.js': [
                        'app/assets/js/main.js',
                        'app/assets/js/playpause.js'
                    ]
                }
            }
        },

        //Compile less files
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "dist/main.min.css": "app/assets/css/style.less"
                }
            }
        },

        //Bake the static html files
        bake: {
            build: {
                options: {
                    content: "app/content.json"
                },

                files: {
                    "dist/index.html": "app/index.html",
                    "dist/burlington-city-council-oct-6-2014-part-1/index.html": "app/burlington-city-council-oct-6-2014-part-1/index.html",
                    "dist/burlington-school-board-special-oct-26-2014/index.html": "app/burlington-school-board-special-oct-26-2014/index.html",
                    "dist/David-Bradbury-of-VCET/index.html": "app/David-Bradbury-of-VCET/index.html",
                    "dist/Oculus-Connect-Building-the-First-Rift-Development-Kit/index.html": "app/Oculus-Connect-Building-the-First-Rift-Development-Kit/index.html",
                    "dist/remi-and-gregs-heron-watch/index.html": "app/remi-and-gregs-heron-watch/index.html",
                    "dist/WooSports-Leo-Koenig-Demoing-the-Woo/index.html": "app/WooSports-Leo-Koenig-Demoing-the-Woo/index.html"
                }
            }
        },

        //Watch styles directory for changes and compile
        //With livereload browser plugin integration.
        watch: {
            less: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['app/css/**/*.less'],
                tasks: ['less']
            },
            
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['uglify']
            },

            bake: {
                files: ['app/includes/**'],
                tasks: ['bake:build']
            },

            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'dist/main.min.css'
                ]
            }
        }
    });

    grunt.task.registerTask('build', ['less','uglify','bake']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bake');
};