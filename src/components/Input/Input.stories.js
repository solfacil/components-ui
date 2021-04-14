import Input from './Input.vue';

export default {
  title: 'Components/UI Elements/Inputs',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'date',
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'time',
          'url',
        ],
      },
      defaultValue: 'search',
    },
  },

  parameters: {
    componentSubtitle: 'Input is a wrapper for custom inputs.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" />',
});

Template.bind({});

export const Data = Template.bind({});
Data.args = {
  type: 'date',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Senha',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  placeholder: 'Buscar',
};

export const Text = Template.bind({});
Text.args = {
  type: 'Text',
};

export const Time = Template.bind({});
Time.args = {
  type: 'time',
};
