module.exports = {
  // Настройки для разработки
  dev: {
    options: {
      // style: 'expanded'
      // style: 'nested',     //Выдало ошибку 04.04.19 на ПК ???
      // sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  },
  // Настройки для продакшна
  prod: {
    options: {
      style: 'compressed',
      // sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  }
};
