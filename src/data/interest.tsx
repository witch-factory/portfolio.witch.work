import { getRandomFloat, getRandomInt } from '@/utils/random';
import { javaScriptPosts, Post } from './interestData';

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

const CANVAS_PADDING = 20;

const adjustNodePositions = <T extends { x: number; y: number }>(nodes: T[], padding = CANVAS_PADDING) => {
  const minX = Math.min(...nodes.map(n => n.x));
  const minY = Math.min(...nodes.map(n => n.y));

  return nodes.map(node => ({
    ...node,
    x: node.x - minX + padding,
    y: node.y - minY + padding,
  }));
};

/**
 * 🌌 노드를 별자리처럼 배치 (중앙-외곽 혼합)
 */
const generateRandomNodes = (posts: Post[], minRadius = 50, maxRadius = 150) => {
  return posts.map(post => {
    const angle = getRandomFloat(0, Math.PI * 2);
    const radius = getRandomFloat(minRadius, maxRadius);

    const centerX = radius;
    const centerY = radius;

    return {
      id: post.id,
      label: post.label,
      component: (
        <a href={post.url} target="_blank" rel="noreferrer noopener">
          {post.label}
        </a>
      ),
      x: centerX + radius * Math.cos(angle) + getRandomInt(-30, 30) + 30 + CANVAS_PADDING,
      y: centerY + radius * Math.sin(angle) + getRandomInt(-30, 30) + 30 + CANVAS_PADDING,
    };
  });
};

/**
 * 🌠 랜덤한 간선 생성 (너무 연결이 많지 않도록)
 */
const generateRandomEdges = (nodes: { id: string; x: number; y: number }[], minEdges = 2, maxEdges = 4) => {
  const edges: Edge[] = [];

  // (1) 기본적인 순환 구조 (인접 노드 연결)
  for (let i = 0; i < nodes.length; i++) {
    const nextIndex = (i + 1) % nodes.length;
    edges.push({ source: nodes[i].id, target: nodes[nextIndex].id });
  }

  // (2) 랜덤 추가 연결 (별자리 느낌)
  nodes.forEach(node => {
    const numEdges = getRandomInt(minEdges, maxEdges);
    const possibleTargets = nodes.filter(n => n.id !== node.id);

    for (let i = 0; i < numEdges; i++) {
      const randomTarget = possibleTargets[getRandomInt(0, possibleTargets.length - 1)];

      if (
        !edges.find(
          e =>
            (e.source === node.id && e.target === randomTarget.id) ||
            (e.target === node.id && e.source === randomTarget.id),
        )
      ) {
        edges.push({ source: node.id, target: randomTarget.id });
      }
    }
  });

  return edges;
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

// 🔹 별자리 그래프 데이터 생성
export const pageGraphData: GraphData<JSX.Element> = (() => {
  const nodes = adjustNodePositions(generateRandomNodes(javaScriptPosts));
  console.log('nodes', nodes);
  const edges = generateRandomEdges(nodes, 2, 5);

  return { nodes, edges };
})();
