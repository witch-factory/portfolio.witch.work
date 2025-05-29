import Header from './ui/Header';
import FlyingWitch from './components/FlyingWitch';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './ui/Layout';
import Home from './pages/Home';

// TODO: 페이지 전환 효과. 가령 밤하늘에서 별이 중앙으로 빨려들어가고 공간이 이동하는 등의 효과
function App() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      {/* <Header
        pageLabels={pages.map(page => page.label)}
        activePageIndex={activePageIndex}
        setActivePageIndex={setActivePageIndex}
      /> */}
      {/* TODO: 마녀가 페이지 가장자리로 가면 스크롤이 생기는 문제 해결하기 */}
      {/* <FlyingWitch /> */}
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<div>프로젝트</div>} />
            <Route path="/laboratory" element={<div>관심사</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </main>
  );
}

export default App;
