type Node<T extends JSX.Element> = {
  id: string;
  label: string;
  component: T;
  x: number;
  y: number;
};

// TODO: 최적화를 위해 위치 기반으로 변경?
type Edge = {
  source: string;
  target: string;
};

export type GraphData<T extends JSX.Element> = {
  nodes: Node<T>[];
  edges: Edge[];
};

// TODO: 유틸 함수 파일 분리
export const calculateBoundingBox = <T extends { x: number; y: number }>(nodes: T[], padding: number = 20) => {
  const xValues = nodes.map(node => node.x);
  const yValues = nodes.map(node => node.y);

  const x1 = Math.min(...xValues) - padding;
  const x2 = Math.max(...xValues) + padding;
  const y1 = Math.min(...yValues) - padding;
  const y2 = Math.max(...yValues) + padding;

  return {
    width: x2 - x1,
    height: y2 - y1,
  };
};

export const pageGraphData: GraphData<JSX.Element> = {
  nodes: [
    {
      id: 'Naver',
      label: '네이버',
      component: (
        <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
          네이버
        </a>
      ),
      x: 20,
      y: 20,
    },
    {
      id: 'Blog',
      label: '블로그',
      component: (
        <a href="https://witch.work/ko" target="_blank" rel="noreferrer noopener">
          블로그
        </a>
      ),
      x: 600,
      y: 180,
    },
    {
      id: 'GitHub',
      label: 'GitHub',
      component: (
        <a href="https://github.com/witch-factory" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      ),
      x: 200,
      y: 300,
    },
  ],
  edges: [
    { source: 'Naver', target: 'Blog' },
    { source: 'Blog', target: 'GitHub' },
    { source: 'GitHub', target: 'Naver' },
  ],
};
