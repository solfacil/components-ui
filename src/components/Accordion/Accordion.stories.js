import Accordion from './Accordion.vue';

export default {
  title: 'Components/UI Elements/Accordion',
  component: Accordion,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Accordion is a vertically collapsing element to show and hide content.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  template:
    '<Accordion v-bind="$props"><template #description-0>Example Description.</template><template #description-1><p>This</p><p>Is</p><p>Another</p><p>Example</p><p>Description.</p></template></Accordion>',
});

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
  <Accordion id="accordion-example" :headers="headers" :open="0">
    <!-- for each header we have a template with slot name 'description-indexOfHeader' -->
    <template #description-0>
      Example Description.
    </template>
    <template #description-1>
      <p>This</p>
      <p>Is</p>
      <p>Another</p>
      <p>Example</p>
      <p>Description.</p>
    </template>
  </Accordion>
      `,
    },
  },
};

Default.args = {
  id: 'accordion-example',
  headers: ['Example 1', 'Example 2'],
};
