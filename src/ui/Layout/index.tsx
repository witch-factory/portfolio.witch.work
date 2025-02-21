import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/constant';
import Star from '../../components/Star';
import * as styles from './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/utils/useDebounce';

const generateScreenStars = (stars: number, width: number, height: number) => {
  return Array.from({ length: stars }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    twinkleDuration: Math.random() * 2 + 1.5,
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
    <article className={styles.container}>
      <div className={styles.starContainer}>
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
      {children}
    </article>
  );
}

export default Layout;
