import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  // top: 'calc(4vh + 3.5rem)',
  // left: '4vw',
  // width: '92vw',
  // height: 'calc(92vh - 3.5rem)',
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 100,
  animation: `${fadeIn} 0.2s ease-in-out`,

  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(3px)',
});

export const modal = style({
  position: 'relative',
  width: '92vw',
  maxHeight: '90vh',
  padding: '2rem',
  borderRadius: '1rem',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',

  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const closeButton = style({
  alignSelf: 'center',
  marginTop: '1rem',
  background: '#845ef7',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: '1rem 2rem',
  outline: 'none',
  border: 'none',
  borderRadius: '1rem',
  cursor: 'pointer',

  transition: 'background-color 0.2s, transform 0.1s',

  ':hover': {
    background: '#7048e8',
  },

  ':active': {
    transform: 'scale(0.98)',
  },

  ':focus-visible': {
    boxShadow: '0 0 0 3px rgba(132, 94, 247, 0.4)',
  },
});
