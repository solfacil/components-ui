import camelCase from 'lodash/camelCase';

const requireModule = require.context('.', false, /\.js$/);
const modules = {
  methods: {},
};

requireModule.keys().forEach((fileName) => {
  // Avoid the index.js file
  if (fileName === './index.js') {
    return;
  }
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
  modules.methods[moduleName] = requireModule(fileName).default;
});

export default modules;
