import { create } from '@storybook/theming/create';
import brandImage from '../public/logo-solfacil-white.svg';

export default create({
  base: 'dark',
  colorSecondary: '#FFB600',
  fontBase: 'Lato, sans-serif',
  textColor: '#FFFFFF',
  brandTitle: 'Solfácil',
  brandUrl: 'https://solfacil.com.br',
  brandImage,
});
