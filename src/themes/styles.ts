import type { DeepPartial, Theme } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

export const styles: DeepPartial<Theme['styles']> = {
  global: {
    body: {
      bg: 'gray.900',
      minHeight: '100vh',
      position: 'relative',
      overflowY: 'scroll',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    li: {
      listStyleType: 'none',
    },
    '&::-webkit-calendar-picker-indicator': {
      filter: 'invert(1)',
    },
    /* width */
    '&::-webkit-scrollbar': {
      width: 2,
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f11a',
      borderRadius: '16px',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ffffff2b',
      borderRadius: '16px',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      borderRadius: '16px',
      background: '#ffffff2b',
    },
    button: {
      _focus: { boxShadow: 'none!important' },
    },
    '.btn-react-share': {
      svg: {
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        marginRight: 4,
      },
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
    '.nft-description': {
      a: {
        color: transparentize('primary.300', 0.7),
      },
    },
    ':root': {
      '--onboard-connect-content-width': '540px',
      '--onboard-connect-sidebar-progress-color': '#00e2a4',
      '--onboard-connect-sidebar-progress-background': '#3A3E3C',
      '--onboard-connect-content-height': '478px',
      '--onboard-spacing-3': '35px',
      '--onboard-modal-border-radius': '16px',
      '--onboard-connect-sidebar-background': '#1B1D1C',
      '--onboard-main-scroll-container-background': '#292D2C',
      '--onboard-connect-header-background': '#292D2C',
      '--onboard-connect-sidebar-color': '#FFFFFF',
      '--onboard-connect-header-color': '#FFFFFF',
      '--onboard-wallet-button-border-radius': '8px',
      '--onboard-spacing-5': '12px',
      '--onboard-wallet-button-background': '#292D2C',
      '--onboard-wallet-button-background-hover': '#404342',
      '--onboard-wallet-button-color': '#FFFFFF',
      '--onboard-wallet-button-border-color': '#4B4F4E',
      '--onboard-wallet-app-icon-border-color': '#4B4F4E',
      '--onboard-close-button-background': 'transparent',
      '--onboard-close-button-color': '#FFFFFF',
    },
    '.announcement a': {
      color: 'primary.200',
    },
  },
};
