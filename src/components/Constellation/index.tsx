import { GraphData } from '@/assets/intro';
import * as styles from './styles.css';

type Props<Component extends JSX.Element> = {
  width: number;
  height: number;
  data: GraphData<Component>;
};

// TODO: select를 통해 노드를 선택할 수 있도록 할까?
function Constellation<Component extends JSX.Element>({ data, width, height }: Props<Component>) {
  return (
    <svg width={width} height={height} className={styles.container}>
      <defs>
        {/* 별빛 효과 */}
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </radialGradient>

        {/* 연결선 Glow 효과 */}
        <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
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
            stroke="rgba(173, 216, 230, 0.8)"
            strokeWidth={1.5}
            filter="url(#glowEffect)"
          />
        );
      })}

      {data.nodes.map(node => (
        <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
          {/* 반짝이는 효과 */}
          <circle cx="0" cy="0" r="8" fill="white" filter="url(#glowEffect)" />
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
  );
}

export default Constellation;
