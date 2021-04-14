import Alert from './Alert.vue';

export default {
  title: 'Components/UI Elements/Alerts',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },

    variant: {
      control: {
        type: 'select',
        options: [
          'success',
          'error',
          'warning',
          'info',
          'info-neutral',
          'info-line',
        ],
      },
      defaultValue: 'success',
    },
  },

  parameters: {
    componentSubtitle:
      "An alert displays an important message in a way that attracts the user's attention without interrupting the user's task.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Alert },
  template: '<Alert v-bind="$props">{{label}}</Alert>',
});

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  label: 'Error',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Warning',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Info',
};

export const infoNeutral = Template.bind({});
infoNeutral.args = {
  variant: 'info-neutral',
  label: 'Info Neutral',
};

export const infoLine = Template.bind({});
infoLine.args = {
  variant: 'info-line',
  label: 'Info Line',
};
