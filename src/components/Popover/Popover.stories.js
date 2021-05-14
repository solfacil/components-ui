import Popover from './Popover.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Popover',
  component: Popover,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: [
          'top',
          'topright',
          'topleft',
          'righttop',
          'right',
          'rightbottom',
          'bottom',
          'bottomleft',
          'bottomright',
          'left',
          'leftbottom',
          'lefttop',
        ],
      },
      defaultValue: 'top',
    },
  },

  parameters: {
    componentSubtitle: 'The floating card popped by hovering.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popover, Button },
  template: `
    <Popover v-bind="$props">
      <Button id="popover">Hover Popover</Button>

      <template slot="popover">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </template>
    </Popover>`,
});

export const Top = Template.bind({});
Top.args = {
  position: 'top',
  title: 'Title Top',
  id: 'pop-1',
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: 'topright',
  title: 'Title Top Right',
  id: 'pop-2',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: 'topleft',
  title: 'Title Top Left',
  id: 'pop-3',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
  title: 'Title Right',
  id: 'pop-4',
};

export const RightBottom = Template.bind({});
RightBottom.args = {
  position: 'rightbottom',
  title: 'Title Right Bottom',
  id: 'pop-5',
};

export const RightTop = Template.bind({});
RightTop.args = {
  position: 'righttop',
  title: 'Title Right Top',
  id: 'pop-6',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
  title: 'Title Bottom',
  id: 'pop-7',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottomleft',
  title: 'Title Bottom Left',
  id: 'pop-8',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: 'bottomright',
  title: 'Title Bottom Right',
  id: 'pop-9',
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
  title: 'Title Left',
  id: 'pop-10',
};

export const LeftTop = Template.bind({});
LeftTop.args = {
  position: 'lefttop',
  title: 'Title Left Top',
  id: 'pop-11',
};

export const LeftBottom = Template.bind({});
LeftBottom.args = {
  position: 'leftbottom',
  title: 'Title Left Bottom',
  id: 'pop-12',
};
