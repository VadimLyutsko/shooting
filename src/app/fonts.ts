import { Aldrich, Golos_Text } from 'next/font/google';
import localFont from 'next/font/local';

export const Golos = Golos_Text({
  subsets: ['latin'],
  display: 'swap',
});

export const AldrichFont = Aldrich({
  subsets: ['latin'],
  weight: '400',
});

export const SpaceGrotesk = localFont({
  src: [
    {
      path: './fonts/SpaceGrotesk-Light.woff2',
      weight: '300',
      // style: 'normal'  ---  all here
    },
    {
      path: './fonts/SpaceGrotesk-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/SpaceGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/SpaceGrotesk-Bold.woff2',
      weight: '700',
    },
  ],
});
