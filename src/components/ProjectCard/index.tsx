import { useState } from 'react';
import * as styles from './styles.css';
import { motion } from 'motion/react';

type Props = {
  title: string;
  description: string;
};

function ProjectCard({ title, description }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className={styles.container}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.article animate={{ rotateY: isFlipped ? 0 : 180, opacity: isFlipped ? 1 : 0 }} className={styles.card}>
        <motion.h2>{title}</motion.h2>
        <motion.p>{description}</motion.p>
      </motion.article>
    </article>
  );
}

export default ProjectCard;
