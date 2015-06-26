module.exports = function(grunt) {
 
  // Project configuration. 
  grunt.initConfig({
    css_sprite: {
      options: {
        'cssPath': '../images',
        'processor': 'css',
        'orientation': 'vertical',
        'margin': 10
      },
      sprite: {
        options: {
          'style': 'dest/css/sprite.css',
          'processor': 'css',
          'margin': 10,
          'retina': true
        },
        src: ['src/images/*'],
        dest: 'dest/images/sprite'
      }
    }
  });
 
  // Load the plugin that provides the "css-sprite" task. 
  grunt.loadNpmTasks('css-sprite');
 
  // Default task(s). 
  grunt.registerTask('default', ['css_sprite']);
};