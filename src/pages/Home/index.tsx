import IntroCard from '@/ui/Intro';
import WitchHatImage from '@/assets/witch-new-hat-original.png';
import { Book, NotebookPen } from 'lucide-react';
import { Link } from 'react-router';

function Home() {
  return (
    <main className="overflow-auto">
      <div className="mx-auto px-4 py-20 mt-16 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 md:h-40 md:w-40 rounded-full border-2 border-witch-purple/30 bg-witch-purple/10 backdrop-blur-sm flex items-center justify-center animate-float">
              <img
                src={WitchHatImage}
                alt="마녀 모자 프로필 이미지"
                className="h-20 w-20 md:h-36 md:w-36 rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-medium leading-tight tracking-wide text-white mb-6 animate-fade-in">
            안녕하세요. <span className="text-witch-purple">김성현</span>입니다.
          </h1>

          <p className="text-white max-w-2xl mx-auto space-y-4 animate-fade-in">
            깊이를 가리지 않고 문제를 해결하는 프론트엔드 개발자입니다.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in">
            <Link
              to="/projects"
              className="w-64 px-6 py-3 rounded-full bg-witch-purple text-white font-medium hover:bg-witch-deep-purple transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Book className="h-4 w-4" />
              <span>프로젝트 보러가기</span>
            </Link>
            <Link
              to="/laboratory"
              className="w-64 px-6 py-3 rounded-full border border-witch-purple text-witch-light-purple hover:bg-witch-purple/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Book className="h-4 w-4" />
              <span>관심사 보러가기</span>
            </Link>
          </div>

          {/* 하단 블로그 버튼 */}
          <div className="mt-6 animate-fade-in">
            <Link
              to="https://witch.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 px-6 py-3 bg-[#e6d6ff] hover:bg-[#c2a7ff] rounded-full border border-witch-purple text-[#4b2991] transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <NotebookPen className="h-4 w-4" />
              <span>블로그 보러가기</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
