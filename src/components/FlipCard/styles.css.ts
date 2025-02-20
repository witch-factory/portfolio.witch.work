import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100vw - 2rem)',
  maxWidth: '30rem',
  height: '100%',
  minHeight: '15rem',
});

// todo: 카드 내부 컨텐츠 배치 스타일링
export const card = style({
  width: '100%',
  height: '100%',
  padding: '1rem',
  borderRadius: '1rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  opacity: 0,
  color: 'white',
  cursor: 'pointer',
});

export const guide = style({
  fontSize: '1.2rem',
  fontWeight: '600',
  textAlign: 'center',
  color: '#b197fc',
});
