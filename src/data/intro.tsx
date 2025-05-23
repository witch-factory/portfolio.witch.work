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
