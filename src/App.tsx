import { useState } from 'react';
import Hero from './pages/Hero';
import { motion } from 'motion/react';
import * as styles from './app.css';
import Header from './components/Header';
import Project from './pages/Project';
import Interest from './pages/Interest';

const pages = [<Hero />, <Project />, <Interest />];

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <main className={styles.app}>
      <Header activePageIndex={activePageIndex} setActivePageIndex={setActivePageIndex} />
      <motion.div
        className={styles.pageWrapper}
        animate={{ x: `-${activePageIndex * 100}vw` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {pages.map((page, index) => (
          <div key={index}>{page}</div>
        ))}
      </motion.div>
    </main>
  );
}

export default App;
