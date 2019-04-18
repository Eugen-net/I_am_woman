module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['images/*.{png,PNG,jpg,JPG,gif,GIF}'],
      dest: 'dist/'
    }]
  }
};
