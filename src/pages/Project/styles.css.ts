import { style } from '@vanilla-extract/css';
import libraryImage from '@/assets/witch-library.webp';

export const container = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${libraryImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  filter: 'blur(10px)',
});

export const title = style({
  color: '#fff',
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '0',
  padding: '0',
});
