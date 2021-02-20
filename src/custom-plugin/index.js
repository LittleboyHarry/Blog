module.exports = function (context, options) {
  return {
    name: 'littleboyharry-custom-plugin',
    injectHtmlTags() {
      return {
        headTags: [],
      };
    },
    configureWebpack(config, isServer, utils) {
      // const { getCacheLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.ya?ml$/,
              type: 'json', // Required by Webpack v4
              use: 'yaml-loader',
            },
          ],
        },
      };
    },
  };
};
