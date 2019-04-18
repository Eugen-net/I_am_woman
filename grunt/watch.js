module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/scripts/*.js'
    ],
    tasks: [
      'jshint',
      'uglify'
    ]
  },

  styles: {
    files: [
      'src/styles/partials/*.scss'
    ],
    tasks: [
      'sass:dev'
    ]
  },
};
