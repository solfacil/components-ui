import Alert from './Alert.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Alerts',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large', 'extra-large'],
    },

    variant: {
      control: {
        type: 'select',
      },
      options: [
        'success',
        'error',
        'warning',
        'warning-neutral',
        'info',
        'info-neutral',
        'info-line',
      ],
    },
    actionButton: {
      control: { type: 'boolean' },
      defaultValue: false,
      description:
        'Just a demonstration of how the button is going through the action slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    componentSubtitle:
      "An alert displays an important message in a way that attracts the user's attention without interrupting the user's task.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Alert, Button },
  template: `
  <Alert v-bind="$props">
    {{label}}
    <template v-if="$props.actionButton" #action>
      <Button 
        id="action-button"
        variant="primary"
      >
        Baixar
      </Button>
    </template>
  </Alert>`,
});

export const Success = Template.bind({});
Success.args = {
  icon: true,
  label: 'Success',
  variant: 'success',
  id: 'alert-1',
};

export const Error = Template.bind({});
Error.args = {
  icon: true,
  label: 'Error',
  variant: 'error',
  id: 'alert-2',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: true,
  label: 'Warning',
  variant: 'warning',
  id: 'alert-3',
};

export const WarningNeutral = Template.bind({});
WarningNeutral.args = {
  icon: true,
  label: 'Warning Neutral',
  variant: 'warning-neutral',
  id: 'alert-4',
};

export const Info = Template.bind({});
Info.args = {
  icon: true,
  label: 'Info',
  variant: 'info',
  id: 'alert-5',
};

export const InfoNeutral = Template.bind({});
InfoNeutral.args = {
  icon: true,
  label: 'Info Neutral',
  variant: 'info-neutral',
  id: 'alert-6',
};

export const InfoLine = Template.bind({});
InfoLine.args = {
  icon: true,
  label: 'Info Line',
  variant: 'info-line',
  id: 'alert-7',
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  icon: true,
  label: 'Baixe o CSV que disponibilizamos para ver e corrigir os problemas.',
  variant: 'warning-neutral',
  id: 'alert-8',
  actionButton: true,
};
