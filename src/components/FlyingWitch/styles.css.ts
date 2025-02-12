import { style } from '@vanilla-extract/css';

export const witch = style({
  position: 'absolute',
  width: '100px',
  height: '100px',
  zIndex: 1,
  pointerEvents: 'none',
  userSelect: 'none',
});

export const particle = style({
  position: 'absolute',
  zIndex: 2,
  background: '#6741d9',
  borderRadius: '50%',
  pointerEvents: 'none',
  userSelect: 'none',
});
