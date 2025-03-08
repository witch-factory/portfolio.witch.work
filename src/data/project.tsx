export type Project = {
  title: string;
  description: string;
  image?: string;
  url: string;
};

// 대충 gpt가 만들어 준 임의 프로젝트들
// TODO: 제대로 수정
export const projects: Project[] = [
  {
    title: '개인 블로그 제작',
    description: 'Next.js로 제작한 개인 블로그입니다. 성능 최적화, 다국어 지원 등이 고려되었습니다.',
    url: 'https://witch.work',
  },
  {
    title: '포트폴리오 제작',
    description: 'React와 TypeScript로 제작한 포트폴리오입니다. 현재 보고 있는 바로 이 페이지입니다.',
    url: 'https://witch.work',
  },
];
