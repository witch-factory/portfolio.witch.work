import { useState } from 'react';
import Hero from './pages/Hero';
import { motion } from 'motion/react';
import Header from './ui/Header';
import Project from './pages/Project';
import Interest from './pages/Interest';
import FlyingWitch from './components/FlyingWitch';

// TODO: 이후에는 소개 - 활동 - 관심사 처럼 바꾸고 싶다.
// 혹은 소개 - 프로젝트 - 활동 - 관심사
const pages = [
  {
    label: '소개',
    component: <Hero />,
  },
  {
    label: '프로젝트',
    component: <Project />,
  },
  {
    label: '관심사',
    component: <Interest />,
  },
];

// TODO: 페이지 전환 효과. 가령 밤하늘에서 별이 중앙으로 빨려들어가고 공간이 이동하는 등의 효과
function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Header
        pageLabels={pages.map(page => page.label)}
        activePageIndex={activePageIndex}
        setActivePageIndex={setActivePageIndex}
      />
      {/* TODO: 마녀가 페이지 가장자리로 가면 스크롤이 생기는 문제 해결하기 */}
      {/* <FlyingWitch /> */}
      <motion.div
        className="flex flex-row"
        animate={{ x: `-${activePageIndex * 100}vw` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {pages.map((page, index) => (
          <div key={index}>{page.component}</div>
        ))}
      </motion.div>
    </main>
  );
}

export default App;
