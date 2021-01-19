import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import SolSwitch from '.';

storiesOf('Components/Forms/Switch', module).add('Switch', () => ({
  components: { SolSwitch },

  template: `
    <div class="flex flex-col items-center">
      <SolSwitch
        :id="id"
        :label="label"
        :checked="checked"
        :disabled="disabled"
        :invalid="invalid"
        :name="name"
        :invalidText="invalidText"
        v-model="valueField"
      />
    </div>`,

  props: {
    label: {
      default: text('Text label', null),
    },

    checked: {
      default: boolean('Checked', false),
    },

    disabled: {
      default: boolean('Disabled', false),
    },

    id: {
      default: text('ID', null),
    },

    invalid: {
      default: boolean('Invalid', false),
    },

    invalidText: {
      default: text('Invalid text', null),
    },

    name: {
      default: text('Name', null),
    },
  },

  data() {
    return {
      valueField: false,
    };
  },

  methods: {
    someMethod: action('clicked'),
  },
}));

const code = `
  import Button from '@/components/SolSwitch';

  <SolSwitch
    :id="id"
    :label="label"
    :checked="checked"
    :disabled="disabled"
    :invalid="invalid"
    :name="name"
    :invalidText="invalidText"
    v-model="valueField"
  />`;

export default {
  title: 'Components/Forms/Switch',
  decorators: [withKnobs],
  component: SolSwitch,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    componentSubtitle:
      'Use RadioButton to allow users to take actions with clicks and taps.',
    docs: {
      // page: 'teste',
      source: {
        code,
      },
    },
  },
};
