import { motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as styles from './styles.css';
import WitchImg from '@/assets/flying-witch.png';

type ObjectState = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  lifetime: number;
};

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

function FlyingWitch() {
  const [witchState, setWitchState] = useState<ObjectState>({
    x: 100,
    y: 100,
    rotation: 0,
    scale: 1,
  });
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);
  const targetPosition = useRef({ x: 100, y: 100 });
  const lastPosition = useRef({ x: 100, y: 100 });

  const createParticle = useCallback((x: number, y: number) => {
    const size = Math.random() * 4 + 2; // 2-6px
    return {
      id: particleIdCounter.current++,
      x,
      y,
      size,
      opacity: 1,
      lifetime: 0,
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = {
        x: e.clientX - 50,
        y: e.clientY - 50,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      setWitchState(prev => {
        // const lerpFactor = Math.min(0.05, Math.max(0.02, distance / 500));

        const lerpFactor = 0.03;

        const newX = lerp(prev.x, targetPosition.current.x, lerpFactor);
        const newY = lerp(prev.y, targetPosition.current.y, lerpFactor);

        // 비용이 큰 hypot를 사용하지 않기 위해 맨해튼 거리로 이동거리를 사용
        const distance = Math.abs(newX - lastPosition.current.x) + Math.abs(newY - lastPosition.current.y);

        if (distance > 5) {
          setParticles(prevParticles => {
            const newParticle = createParticle(
              newX + 50 + (Math.random() - 0.5) * 20,
              newY + 50 + (Math.random() - 0.5) * 20,
            );
            return [...prevParticles, newParticle];
          });

          lastPosition.current = { x: newX, y: newY };
        }

        // 현재 위치에서 목표 위치까지의 각도 계산
        const deltaX = targetPosition.current.x - prev.x;
        const deltaY = targetPosition.current.y - prev.y;
        const scale = deltaX > 0 ? -1 : 1;
        const angle = Math.atan2(Math.abs(deltaY), Math.abs(deltaX)) * (180 / Math.PI);
        const angleDir = Math.sign(deltaY * deltaX) * scale;
        const rotation = Math.min(30, angle) * angleDir;

        return { x: newX, y: newY, rotation, scale };
      });

      // 입자 업데이트
      setParticles(prevParticles =>
        prevParticles
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.02,
            lifetime: particle.lifetime + 1,
          }))
          .filter(particle => particle.opacity > 0),
      );

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [createParticle]);

  return (
    <>
      {' '}
      <motion.img
        src={WitchImg}
        alt="Flying Witch"
        className={styles.witch}
        initial={false}
        animate={{ y: [-10, 10, -10], scaleX: witchState.scale, rotate: `${witchState.rotation}deg` }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 1 },
        }}
        style={{
          top: `${witchState.y}px`,
          left: `${witchState.x}px`,
        }}
      />
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}px`,
            left: `${particle.x}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px rgba(167, 139, 250, 0.6), 0 0 ${particle.size * 4}px rgba(139, 92, 246, 0.4)`,
          }}
        />
      ))}
    </>
  );
}

export default FlyingWitch;
