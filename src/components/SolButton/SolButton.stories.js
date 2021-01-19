import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import SolButton from '.';

storiesOf('Components/UI Elements/Button', module).add('Button', () => ({
  components: { SolButton },

  template: `
    <div class="flex flex-col items-center">
      <sol-button
      :disabled="disabled"
      :size="size"
      :variant="variant"
      @click="someMethod"
      class="mb-4">Button</sol-button>

      <sol-button
        :disabled="disabled"
        :size="size"
        :variant="variant"
        tag="a"
        >Link</sol-button>
    </div>`,

  props: {
    disabled: {
      default: boolean('Disabled', false),
    },

    size: {
      default: select(
        'Size',
        {
          Large: 'large',
          Medium: 'medium',
          Small: 'small',
        },
        'medium',
      ),
    },

    variant: {
      default: select(
        'Variant',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Exception: 'exception',
        },
        'primary',
      ),
    },
  },

  data() {
    return {};
  },

  methods: {
    someMethod: action('clicked'),
  },
}));

const code = `
  import Button from '@/components/SolButton';

  <sol-button
    @click="someMethod"
    :disabled="disabled"
    :size="size"
    :type="type"
    :variant="variant">Button</sol-button>

  <sol-button
    :disabled="disabled"
    :size="size"
    :to="to"
    tag="a"
    :target="target"
    :variant="variant">Link</sol-button>
`;

export default {
  title: 'Components/UI Elements/Button',
  decorators: [withKnobs],
  component: SolButton,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    componentSubtitle:
      'Use Button to allow users to take actions with clicks and taps.',
    docs: {
      // page: 'teste',
      source: {
        code,
      },
    },
  },
};
