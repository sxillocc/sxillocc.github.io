module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          name: false,
          rename: false,
          sizes: [{
            name: '',
            width: '100%',
            suffix: '_50w400',
            quality: 50
          }
        ]
        },
        files: [{
          expand: true,
          src: ['complete_bg.jpg'],
          cwd: './buffer',
          dest: './'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};