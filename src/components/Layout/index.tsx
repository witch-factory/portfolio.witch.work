import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/constant';
import Star from '../Star';
import * as styles from './styles.css';

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * SCREEN_WIDTH,
  y: Math.random() * SCREEN_HEIGHT,
  twinkleDuration: Math.random() * 2 + 1.5,
}));

// TODO: night sky css 등을 치면 나오는 걸 참고해서 밤하늘을 더 잘 표현하기
// TODO: 화면 리사이즈에 따라 새로 생긴 공간에도 별이 잘 나타나도록 수정하기
function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className={styles.background}>
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
