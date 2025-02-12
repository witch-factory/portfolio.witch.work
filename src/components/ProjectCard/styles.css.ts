import { style } from '@vanilla-extract/css';

export const container = style({
  width: '30rem',
  height: '30rem',
  cursor: 'pointer',
});

export const card = style({
  width: '100%',
  height: '100%',
  padding: '1rem',
  borderRadius: '1rem',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  opacity: 0,
  color: 'white',
});
