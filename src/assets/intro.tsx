import GitHubImage from '@/assets/github-mark-white.svg';
import WitchHatImage from '@/assets/witch-new-hat-original.png';

export const INTRO_TITLE = '안녕하세요. 김성현입니다.';
export const INTRO_TEXTS = [
  '기계공학을 전공하다가 우연히 몇몇 개발자들을 만났습니다.',
  '그들은 단 1초의 망설임도 없이 개발을 사랑한다고 말했습니다.',
  '1조가 있어도 개발을 할 것이라고 말했습니다.',
  '별처럼 빛나던 그들의 열정에 홀려 저도 개발자가 되었습니다.',
];

export type Social = {
  label: string;
  url: string;
  icon: string;
};

export const socialLinks: Social[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/witch-factory',
    icon: GitHubImage,
  },
  {
    label: 'Blog',
    url: 'https://witch.work',
    icon: WitchHatImage,
  },
];

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
    title: '마법의 북마크 확장 프로그램',
    description: 'Chrome 확장 프로그램으로, 직관적인 UI를 통해 북마크를 쉽게 관리할 수 있습니다.',
    url: 'https://github.com/witch-factory',
  },
  {
    title: '타로 카드 점보기 앱',
    description: 'React와 TypeScript로 제작한 심리 테스트 & 타로 점보기 서비스입니다.',
    url: 'https://witch.work',
  },
];
