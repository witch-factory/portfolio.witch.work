// React로 멋진 3D 은하 만들기(feat. R3F)
import { starColors } from '@/utils/colors';
import * as styles from './styles.css';
import { getRandomInt } from '@/utils/random';

type StarProps = {
  x: number;
  y: number;
  twinkleDuration?: number;
  size?: 'small' | 'medium' | 'large';
};

function Star({ x, y, size = 'medium', twinkleDuration = 2 }: StarProps) {
  const randomColor = starColors[getRandomInt(0, starColors.length - 1)];

  return (
    <div
      className={`${styles.star} ${styles[size]}`}
      style={{ top: `${y}px`, left: `${x}px`, animationDuration: `${twinkleDuration}s`, background: randomColor }}
    />
  );
}

export default Star;
