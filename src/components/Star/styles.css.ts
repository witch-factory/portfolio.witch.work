import { keyframes, style } from '@vanilla-extract/css';

const twinkling = keyframes({
  '0%': { opacity: 0.3 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.3 },
});

export const star = style({
  position: 'absolute',
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  background: 'white',
  opacity: 0.3,
  animation: `${twinkling} 2s infinite alternate`,
});

export const small = style({
  width: '1px',
  height: '1px',
});

export const medium = style({
  width: '2px',
  height: '2px',
});

export const large = style({
  width: '3px',
  height: '3px',
});
