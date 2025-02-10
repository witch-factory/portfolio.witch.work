import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '3.5rem',
  position: 'fixed',
  top: 0,
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  margin: '0 auto',
  zIndex: 50,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const nav = style({
  width: '100%',
  height: '100%',
  maxWidth: '30rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
});

export const link = style({
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.5rem 2rem',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
});

export const active = style({
  color: 'black',
  backgroundColor: 'white',
  borderRadius: '0.5rem',
});
