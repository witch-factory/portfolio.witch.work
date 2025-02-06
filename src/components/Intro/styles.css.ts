import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100% - 3rem)',
  maxWidth: '30rem',
  padding: '3rem 1.5rem',
  borderRadius: '1rem',
  backdropFilter: 'blur(3px)',
  backgroundColor: 'rgba(255,255,255,0.1)',
  textAlign: 'center',
  color: 'white',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const description = style({
  fontSize: '1rem',
  lineHeight: 1.5,
});

export const socialLinkContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '1rem',
});

export const socialLink = style({
  width: '6rem',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '1rem 0.5rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(3px)',
});

export const socialLinkIcon = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  marginBottom: '0.5rem',
});
