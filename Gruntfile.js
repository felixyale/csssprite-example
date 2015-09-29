module.exports = function(grunt) {
 
  // Project configuration. 
  grunt.initConfig({
    sprite:{
      all: {
        src: ['src/images/*'],
        dest: 'dest/css/sprite.png',
        destCss: 'dest/css/sprite.css',

        retinaSrcFilter: ['src/images/*@2x.png'],
        retinaDest: 'dest/css/sprite@2x.png'
      }
    }
  });
 
  // Load the plugin that provides the "css-sprite" task. 
  // grunt.loadNpmTasks('css-sprite');
  grunt.loadNpmTasks('grunt-spritesmith');

  // Default task(s). 
  // grunt.registerTask('default', ['css_sprite']);
  grunt.registerTask('default', ['sprite']);
};