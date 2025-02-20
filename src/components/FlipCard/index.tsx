import * as styles from './styles.css';
import { motion } from 'motion/react';

type Props = {
  title: string;
  description: string;
  isFlipped: boolean;
  onClick: () => void;
};

function FlipCard({ title, description, isFlipped, onClick }: Props) {
  return (
    <article className={styles.container}>
      <motion.article
        animate={{ rotateY: isFlipped ? 0 : 180, opacity: isFlipped ? 1 : 0 }}
        className={styles.card}
        onClick={onClick}
      >
        {/* TODO: 적절한 텍스트 색상 등 디자인 */}
        <motion.h2>{title}</motion.h2>
        <motion.p>{description}</motion.p>
        <motion.p
          className={styles.guide}
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              repeat: Infinity,
              duration: 1.5,
            },
          }}
        >
          카드 클릭하여 자세히 보기
        </motion.p>
      </motion.article>
    </article>
  );
}

export default FlipCard;
