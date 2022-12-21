import type { DeepPartial, Theme } from '@chakra-ui/react';

export const styles: DeepPartial<Theme['styles']> = {
  global: {
    body: {
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom left,  #11e8bb 0%,#8200c9 100%)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#11e8bb', endColorstr='#8200c9',GradientType=0 )",
      overflow: 'hidden',
    },
    li: {
      listStyleType: 'none',
    },

    button: {
      _focus: { boxShadow: 'none!important' },
    },

    '.pagination': {
      display: 'block',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginTop: '32px',
      textAlign: 'center',
      listStyle: 'none',
    },
    '.pagination li': {
      display: 'inline-block',
      minWidth: 8,
      px: 1,
      height: 8,
      marginX: 1,
      fontSize: 'lg',
      '&.active': {
        color: 'green.300',
      },
    },

    '.slick-slider': {
      width: '100%',
      '.slick-dots li': {
        width: '10px',
        height: '10px',
        padding: 0,
      },
      '.slick-dots li.slick-active': {
        width: '20px',
      },
      '.slick-dots li button:before': {
        color: 'gray.900',
        opacity: 1,
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        background: '#333',
        content: `""`,
      },
      '.slick-dots li.slick-active button:before': {
        background: 'primary.200',
        width: '24px',
      },
    },
  },
};
