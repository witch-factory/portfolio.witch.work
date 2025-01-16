import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as styles from './styles.css';

function Interest() {
  return (
    <Canvas className={styles.container}>
      {/* 3D 콘텐츠 추가 */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <pointLight position={[-10, -10, -10]} />
      <Stars radius={100} depth={10} count={5000} factor={7} saturation={0} fade />
    </Canvas>
  );
}

export default Interest;
