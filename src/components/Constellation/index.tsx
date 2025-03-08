import { calculateBoundingBox, GraphData } from '@/data/interest';
import * as styles from './styles.css';
import { useState } from 'react';

type Props<Component extends JSX.Element> = {
  width: number;
  height: number;
  data: GraphData<Component>;
};

// TODO: select를 통해 노드를 선택할 수 있도록 할까?
function Constellation<Component extends JSX.Element>({ data }: Props<Component>) {
  const [isHovered, setIsHovered] = useState(false);

  const { width, height } = calculateBoundingBox(data.nodes, 20);
  console.log(width, height);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg width={width} height={height} className={styles.container}>
        <defs>
          {/* 별빛 효과 */}
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>

          {/* 호버 시 별빛 효과 */}
          <radialGradient id="hoverGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffff80" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
          </radialGradient>

          {/* 연결선 기본 효과 */}
          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 연결선 호버 시 Glow 효과 */}
          <filter id="lineHoverGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 별 호버 시 Glow 효과 */}
          <filter id="starHoverGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {data.edges.map((edge, index) => {
          const sourceNode = data.nodes.find(n => n.id === edge.source);
          const targetNode = data.nodes.find(n => n.id === edge.target);
          if (!sourceNode || !targetNode) {
            return null;
          }

          return (
            <line
              key={index}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke={isHovered ? 'rgba(173, 216, 230, 0.8)' : 'rgba(120, 170, 220, 0.5)'}
              strokeWidth={isHovered ? 1.5 : 1}
              filter={isHovered ? 'url(#lineHoverGlow)' : 'url(#lineGlow)'}
            />
          );
        })}

        {data.nodes.map(node => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <circle
              cx="0"
              cy="0"
              r={isHovered ? 12 : 8}
              fill={isHovered ? 'url(#hoverGlow)' : 'url(#glow)'}
              opacity={isHovered ? 0.8 : 0.3}
              filter={isHovered ? 'url(#starHoverGlow)' : 'none'}
            />

            {/* 반짝이는 효과 */}
            <circle cx="0" cy="0" r="8" fill={isHovered ? '#ffffff' : '#c0d8f0'} filter="url(#glowEffect)" />
            {/* <circle cx="0" cy="0" r="4" fill="url(#glow)" /> */}
            <foreignObject x={0} y={0} width="100" height="100">
              <span className={styles.label}>{node.label}</span>
            </foreignObject>
          </g>

          // <foreignObject
          //   key={node.id}
          //   x={node.x - 50} // 위치 조정
          //   y={node.y - 50}
          //   width="100"
          //   height="100"
          // >
          //   <div
          //     style={{
          //       width: '100px',
          //       height: '100px',
          //       display: 'flex',
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       background: 'rgba(255,255,255,0.1)',
          //       borderRadius: '50%',
          //       color: 'white',
          //       cursor: 'pointer',
          //       fontSize: '14px',
          //       fontWeight: 'bold',
          //     }}
          //   >
          //     {node.component}
          //   </div>
          // </foreignObject>
        ))}
      </svg>
    </div>
  );
}

export default Constellation;
