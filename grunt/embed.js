module.exports = {
  options: {
    threshold: '10000000KB'
  },
  app: {
    files: {
      'app/docs.html': 'app/index.html'
    }
  },
  dist: {
    files: {
      'dist/docs.html': 'dist/index.html'
    }
  }
};
