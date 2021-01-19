import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import SolRadioButton from '.';

storiesOf('Components/Forms/RadioButton', module).add('RadioButton', () => ({
  components: { SolRadioButton },

  template: `
    <div class="flex flex-col items-center">
      <SolRadioButton
        :label="label"
        :checked="checked"
        :disabled="disabled"
        :invalid="invalid"
        :name="name"
        :invalidText="invalidText"
        :val="value"
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

    invalid: {
      default: boolean('Invalid', false),
    },

    invalidText: {
      default: text('Invalid text', null),
    },

    name: {
      default: text('Name', 'nameField'),
    },

    value: {
      default: text('Value', 'valeu'),
    },
  },

  data() {
    return {
      valueField: null,
    };
  },

  methods: {
    someMethod: action('clicked'),
  },
}));

const code = `
  import Button from '@/components/SolRadioButton';

  <SolRadioButton
    :label="label"
    :checked="checked"
    :disabled="disabled"
    :invalid="invalid"
    :name="name"
    :invalidText="invalidText"
    :val="value"
    v-model="valueField"
  />`;

export default {
  title: 'Components/Forms/RadioButton',
  decorators: [withKnobs],
  component: SolRadioButton,
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
