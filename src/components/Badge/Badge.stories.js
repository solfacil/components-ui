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
  id: 'done-1',
};

export const Denied = Template.bind({});
Denied.args = {
  label: 'Denied',
  variant: 'denied',
  id: 'done-2',
};

export const Review = Template.bind({});
Review.args = {
  label: 'Review',
  variant: 'review',
  id: 'done-3',
};

export const InProgress = Template.bind({});
InProgress.args = {
  label: 'In progress',
  variant: 'in-progress',
  id: 'done-4',
};

export const Approved = Template.bind({});
Approved.args = {
  label: 'Approved',
  variant: 'approved',
  id: 'done-5',
};

export const Message = Template.bind({});
Message.args = {
  label: 'Message',
  variant: 'message',
  id: 'done-6',
};

export const MessageLine = Template.bind({});
MessageLine.args = {
  label: 'Message Line',
  variant: 'message-line',
  id: 'done-7',
};
