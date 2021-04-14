import Alert from './Alert.vue';

export default {
  title: 'Components/UI Elements/Alerts',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extra-large'],
      },
      defaultValue: 'small',
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
  icon: true,
  label: 'Success',
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  icon: true,
  label: 'Error',
  variant: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: true,
  label: 'Warning',
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  icon: true,
  label: 'Info',
  variant: 'info',
};

export const infoNeutral = Template.bind({});
infoNeutral.args = {
  icon: true,
  label: 'Info Neutral',
  variant: 'info-neutral',
};

export const infoLine = Template.bind({});
infoLine.args = {
  icon: true,
  label: 'Info Line',
  variant: 'info-line',
};
