import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/constant';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/utils/useDebounce';
import { starColors } from '@/utils/colors';
import { getRandomInt } from '@/utils/random';

const generateScreenStars = (stars: number, width: number, height: number) => {
  return Array.from({ length: stars }, () => ({
    size: Math.random() * 1 + 1,
    x: Math.random() * width,
    y: Math.random() * height,
    animation: `twinkle ${Math.random() * 2 + 1.5}s infinite ease-in-out ${Math.random() * 2}s`,
  }));
};

// TODO: night sky css 등을 치면 나오는 걸 참고해서 밤하늘을 더 잘 표현하기
// TODO: 화면 resize 이벤트에 따라 바뀐 공간에도 별이 잘 나타나도록 수정하기
function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stars, setStars] = useState(() => generateScreenStars(200, SCREEN_WIDTH, SCREEN_HEIGHT));

  const handleResize = useCallback(() => {
    setStars(generateScreenStars(200, window.innerWidth, window.innerHeight));
  }, []);

  const debouncedHandleResize = useDebounce(handleResize, 200);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return (
    <article className="w-screen h-screen min-h-screen bg-gradient-to-b from-[#1e1e30] to-black relative">
      <div className="absolute w-screen h-screen pointer-events-none overflow-hidden">
        {stars.map((star, index) => {
          const randomColor = starColors[getRandomInt(0, starColors.length - 1)];
          const { x, y, size, animation } = star;

          return (
            <div
              key={index}
              className="absolute rounded-full bg-white opacity-30 animate-twinkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${y}px`,
                left: `${x}px`,
                animation,
                background: randomColor,
              }}
            />
          );
        })}
      </div>
      {children}
    </article>
  );
}

export default Layout;
