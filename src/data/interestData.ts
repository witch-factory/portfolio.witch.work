export type Post = {
  id: string;
  label: string;
  url: string;
};

export const javaScriptPosts: Post[] = [
  {
    id: 'javascript-dance-with-with-statement',
    label: 'with문에 대한 문장 하나에서 MDN에 기여하고 논문을 읽어보기까지',
    url: 'https://witch.work/posts/javascript-dance-with-with-statement',
  },
  {
    id: 'javascript-closure-deep-dive-application',
    label: '클로저 시리즈 1. 클로저란 무엇인가?',
    url: 'https://witch.work/ko/posts/javascript-closure-deep-dive-application',
  },
  {
    id: 'javascript-closure-deep-dive-history',
    label: '클로저 시리즈 2. 수학자들의 꿈에서 JS의 스타가 되기까지',
    url: 'https://witch.work/ko/posts/javascript-closure-deep-dive-history',
  },
  {
    id: 'javascript-semicolon-insertion',
    label: 'JS의 세미콜론 자동 삽입',
    url: 'https://witch.work/ko/posts/javascript-semicolon-insertion',
  },
  {
    id: 'javascript-why-nan-is-different-from-itself',
    label: 'NaN은 왜 자기 자신과도 다를까?',
    url: 'https://witch.work/ko/posts/javascript-why-nan-is-different-from-itself',
  },
  {
    id: 'javascript-with-statement-2',
    label: '말썽쟁이 with문과 Symbol.unscopables 연대기',
    url: 'https://witch.work/ko/posts/javascript-with-statement-2',
  },
  {
    id: 'javascript-with-statement-1',
    label: 'with문에 대한 기본적인 이해',
    url: 'https://witch.work/ko/posts/javascript-with-statement-1',
  },
  {
    id: 'javascript-why-empty-object-is-truthy',
    label: 'JS는 왜 빈 객체를 참으로 평가할까?',
    url: 'https://witch.work/ko/posts/javascript-why-empty-object-is-truthy',
  },
  {
    id: 'javascript-trip-of-js-value-where-value-stored',
    label: 'JS의 값은 스택과 힙 중 어디에 저장되는가',
    url: 'https://witch.work/ko/posts/javascript-trip-of-js-value-where-value-stored',
  },
];
