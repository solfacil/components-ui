import Badge from './Badge.vue';

export default {
  title: 'Components/UI Elements/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'done',
          'denied',
          'review',
          'in-progress',
          'approved',
          'message',
          'message-line',
        ],
      },
      defaultValue: 'message-line',
    },
  },

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template: '<Badge v-bind="$props">{{label}}</Badge>',
});

export const Done = Template.bind({});
Done.args = {
  label: 'Done',
  variant: 'done',
};

export const Denied = Template.bind({});
Denied.args = {
  label: 'Denied',
  variant: 'denied',
};

export const Review = Template.bind({});
Review.args = {
  label: 'Review',
  variant: 'review',
};

export const InProgress = Template.bind({});
InProgress.args = {
  label: 'In progress',
  variant: 'in-progress',
};

export const Approved = Template.bind({});
Approved.args = {
  label: 'Approved',
  variant: 'approved',
};

export const Message = Template.bind({});
Message.args = {
  label: 'Message',
  variant: 'message',
};

export const MessageLine = Template.bind({});
MessageLine.args = {
  label: 'Message Line',
  variant: 'message-line',
};
