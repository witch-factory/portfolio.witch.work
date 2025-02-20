import FlipCard from '@/components/FlipCard';
import * as styles from './styles.css';
import { useState } from 'react';
import Modal from '@/components/Modal';

type Props = {
  galaxyDecoration: React.ReactNode;
  title: string;
  description: string;
};

function ProjectCard({ galaxyDecoration, title, description }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsFlipped(false);
    setIsModalOpen(true);
  };

  return (
    <article
      className={styles.container}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={styles.cardWrapper}>
        <FlipCard title={title} description={description} isFlipped={isFlipped} onClick={handleClick} />
      </div>
      {galaxyDecoration}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {/** TODO: props를 통해서 프로젝트의 상세 정보를 받을 수 있도록 하기 */}
        <h2>제목</h2>
        <p>상세설명</p>
      </Modal>
    </article>
  );
}

export default ProjectCard;
