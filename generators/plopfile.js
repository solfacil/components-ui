module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/index.vue.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/stories.js.hbs',
      },
      {
        type: 'add',
        path: '../src/assets/scss/_{{lowerCase name}}.scss',
        templateFile: 'templates/style.scss.hbs',
      },
    ],
  });
};
