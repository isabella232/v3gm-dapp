import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'GT America Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('GT America Mono'),
          url('./fonts/GT-America-Mono-Bold.woff') format('woff'),
          url('./fonts/GT-America-Mono-Bold.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'GT America Condensed-Medium';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local('GT America Condensed-Medium'),
          url('./fonts/GT-America-Condensed-Medium.woff2') format('woff2'),
          url('./fonts/GT-America-Condensed-Medium.woff') format('woff');
      }
      
      @font-face {
        font-family: 'GT America Condensed-Bold';
        font-display: swap;
        font-style: normal;
        font-weight: 700;
        font-stretch: condensed;
        src: local('GT America Condensed-Bold'),
          url('./fonts/GT-America-Condensed-Bold.woff2') format('woff2'),
          url('./fonts/GT-America-Condensed-Bold.woff') format('woff');
      }
      
      @font-face {
        font-family: 'GT America Extended Bold';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('GT America Extended Bold'),
          url('./fonts/GT-America-Extended-Bold.woff2') format('woff2'),
          url('./fonts/GT-America-Extended-Bold.woff') format('woff');
      }
      `}
  />
)

export default Fonts
