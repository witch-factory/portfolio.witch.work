import { starColors } from '@/utils/colors';
import { getRandomInt } from '@/utils/random';

type StarProps = {
  x: number;
  y: number;
  twinkleDuration?: number;
  size?: 'small' | 'medium' | 'large';
};

function Star({ x, y, size = 'medium', twinkleDuration = 2 }: StarProps) {
  const randomColor = starColors[getRandomInt(0, starColors.length - 1)];

  const sizeClass = {
    small: 'w-px h-px',
    medium: 'w-[2px] h-[2px]',
    large: 'w-[3px] h-[3px]',
  }[size];

  return (
    <div
      className={`absolute rounded-full bg-white opacity-30 animate-twinkle ${sizeClass}`}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        animationDuration: `${twinkleDuration}s`,
        background: randomColor,
      }}
    />
  );
}

export default Star;
