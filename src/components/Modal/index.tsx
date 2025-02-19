import { motion, AnimatePresence } from 'motion/react';
import * as styles from './styles.css';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ children, isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.overlay}>
          {children}
          <button type="button" onClick={onClose} className={styles.closeButton}>
            닫기
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
