import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100vh',
  scrollSnapAlign: 'start',
  backgroundColor: '#000',
  overflow: 'hidden',
});

export const title = style({
  color: '#fff',
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '0',
  padding: '0',
});
