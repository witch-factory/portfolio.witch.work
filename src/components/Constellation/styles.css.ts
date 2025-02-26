import { keyframes, style } from '@vanilla-extract/css';

const twinkling = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
});

export const container = style({});

export const star = style({
  position: 'absolute',
  cursor: 'pointer',
  animation: `${twinkling} 2s infinite alternate`,
  transition: 'transform 0.2s ease-in-out',
});

export const label = style({
  color: 'white',
  display: 'none',
  selectors: {
    [`${container}:hover &`]: {
      display: 'block',
    },
  },
});
