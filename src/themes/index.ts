import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './configs';
import { fonts } from './fonts';
import { breakpoints } from './breakpoints';
import { sizes } from './sizes';
import { styles } from './styles';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  breakpoints,
  sizes,
  styles,
});

export default customTheme;
