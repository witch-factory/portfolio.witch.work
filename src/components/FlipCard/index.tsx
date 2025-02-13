import { useEffect, useState } from 'react';
import * as styles from './styles.css';
import { motion } from 'motion/react';
import Modal from '../Modal';

type Props = {
  title: string;
  description: string;
};

function FlipCard({ title, description }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardFliped = isFlipped && !isModalOpen;

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <article
      className={styles.container}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.article
        animate={{ rotateY: cardFliped ? 0 : 180, opacity: cardFliped ? 1 : 0 }}
        className={styles.card}
        onClick={() => setIsModalOpen(true)}
      >
        {/* TODO: 적절한 텍스트 색상 등 디자인 */}
        <motion.h2>{title}</motion.h2>
        <motion.p>{description}</motion.p>
        <motion.p>클릭하여 자세히 보기</motion.p>
      </motion.article>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>제목</h2>
        <p>상세설명</p>
      </Modal>
    </article>
  );
}

export default FlipCard;
