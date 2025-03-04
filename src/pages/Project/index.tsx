import { projects } from '@/assets/intro';
import Layout from '@/ui/Layout';

import Galaxy from '@/components/Galaxy';

import { generateOvalGalaxyStars, generateSpiralGalaxyStars } from '@/utils/generateStars';
import ProjectCard from '@/ui/ProjectCard';

const ovalGalaxyStars = generateOvalGalaxyStars(3000, 50); // 1000개의 별, 반경 300px 내 배치
const spiralGalaxyStars = generateSpiralGalaxyStars(500, 5, 6);

// TODO: 프로젝트 카드의 조작에 대한 도움말 추가
// 은하수에 hover시 카드가 뒤집히고 클릭 시 해당 프로젝트 모달
function Project() {
  return (
    <Layout>
      {/* {projects.map(project => (
        <FlipCard key={project.title} title={project.title} description={project.description} />
      ))} */}
      <ProjectCard
        title={projects[0].title}
        description={projects[0].description}
        galaxyDecoration={
          <Galaxy
            width={400}
            height={200}
            stars={ovalGalaxyStars}
            rotationSpeed={0.002}
            tilt={-Math.PI / 8}
            verticalCompression={0.5}
          />
        }
      />
      <ProjectCard
        title={projects[1].title}
        description={projects[1].description}
        galaxyDecoration={
          <Galaxy
            width={400}
            height={200}
            stars={spiralGalaxyStars}
            rotationSpeed={0.002}
            tilt={-Math.PI / 8}
            verticalCompression={0.5}
          />
        }
      />
    </Layout>
  );
}

export default Project;
