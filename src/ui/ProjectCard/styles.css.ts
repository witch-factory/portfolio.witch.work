import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100vw - 2rem)',
  maxWidth: '30rem',
  minHeight: '15rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 카드 래퍼 스타일
export const cardWrapper = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
});
