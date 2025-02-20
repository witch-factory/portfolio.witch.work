import GitHubImage from '@/assets/github-mark-white.svg';
import WitchHatImage from '@/assets/witch-new-hat-original.png';

export const INTRO_TITLE = '안녕하세요. 김성현입니다.';
export const INTRO_TEXTS = [
  '기계공학을 전공하다가 우연히 몇몇 개발자들을 만났습니다.',
  '그들은 단 1초의 망설임도 없이 자신의 일을 사랑한다고 말했습니다.',
  '북극성처럼 빛나 보였던 그들의 눈을 따라서 개발자가 되었습니다.',
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
    title: '개인 블로그 제작',
    description: 'Next.js로 제작한 개인 블로그입니다. 성능 최적화, 다국어 지원 등이 고려되었습니다.',
    url: 'https://witch.work',
  },
  {
    title: '포트폴리오 제작',
    description: 'React와 TypeScript로 제작한 포트폴리오입니다.',
    url: 'https://witch.work',
  },
];
