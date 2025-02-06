import { keyframes, style } from '@vanilla-extract/css';

export const background = style({
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(to bottom, #1e1e30, #000)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

export const starContainer = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

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
