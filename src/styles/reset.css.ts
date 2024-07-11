import { globalStyle } from '@vanilla-extract/css';

globalStyle(':root', {
  fontFamily:
    "pretendard, apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  textRendering: 'optimizeSpeed',
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  minHeight: '100vh',
  scrollBehavior: 'smooth',
  backgroundColor: '#ffffff',
  color: '#28292D',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('h1', {
  fontSize: '1.75rem',
});

globalStyle('h2', {
  fontSize: '1.5rem',
});

globalStyle('h3', {
  fontSize: '1.25rem',
});

globalStyle('h4', {
  fontSize: '1rem',
});

globalStyle('hr', {
  margin: '0.25rem 0',
  border: 0,
  borderTop: '0.125rem solid #adb5bd',
});

globalStyle('img', {
  display: 'block',
  margin: '0 auto',
});

globalStyle('p', {
  margin: '0.75rem 0',
  lineHeight: '1.5rem',
});

globalStyle('table', {
  width: '100%',
  margin: '0.75rem 0',
  borderCollapse: 'collapse',
  lineHeight: '1.75rem',
});

globalStyle('th, td', {
  padding: '0.75rem 0',
});

globalStyle('blockquote', {
  paddingLeft: '1rem',
});

globalStyle('article', {
  overflowWrap: 'break-word',
});

globalStyle("pre[class^='language-']", {
  borderRadius: '0.25rem',
});

globalStyle("code[class*='language-']", {
  whiteSpace: 'pre-wrap',
});

globalStyle("pre[class*='language-']", {
  whiteSpace: 'pre-wrap',
});