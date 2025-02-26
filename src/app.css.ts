import { style } from '@vanilla-extract/css';

export const app = style({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});
