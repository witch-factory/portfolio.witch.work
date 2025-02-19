import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'absolute',
  top: 'calc(4vh + 3.5rem)',
  left: '4vw',
  width: '92vw',
  height: 'calc(92vh - 3.5rem)',
  margin: '0 auto',
  padding: '1rem',
  borderRadius: '1rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  color: 'white',
  opacity: 0,
  zIndex: 100,
});

export const modal = style({
  padding: '1.5rem',
  width: 'min(90%, 400px)',
});

export const closeButton = style({
  background: '#845ef7',
  color: 'white',
  fontSize: '1.2rem',
  padding: '1rem 2rem',
  outline: 'none',
  border: 'none',
  borderRadius: '1rem',
  cursor: 'pointer',
});
