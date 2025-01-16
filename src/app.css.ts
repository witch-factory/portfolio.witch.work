import { style } from '@vanilla-extract/css';

export const app = style({
  width: '100%',
  height: '100vh',
  scrollSnapType: 'y mandatory',
  overflowX: 'hidden',
  overflowY: 'auto',
});
