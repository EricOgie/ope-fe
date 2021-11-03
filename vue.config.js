module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Loaner/'
    : '/'
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       implementation: require('sass'),
  //     },
  //   },
  // },
};
