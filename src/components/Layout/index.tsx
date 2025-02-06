import * as styles from './styles.css';

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  twinkleDuration: Math.random() * 2 + 1.5,
}));

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.background}>
      <div className={styles.starContainer}>
        {stars.map((star, index) => (
          <div
            key={index}
            className={styles.star}
            style={{ top: `${star.y}vh`, left: `${star.x}vw`, animationDuration: `${star.twinkleDuration}s` }}
          />
        ))}
      </div>
      {children}
    </main>
  );
}

export default Layout;
