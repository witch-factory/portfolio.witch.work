import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100vh',
  backgroundImage: 'white',
  // background: 'linear-gradient(to bottom, #2a0a5e, #4b0082, #6a0dad)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  textAlign: 'center',
});
