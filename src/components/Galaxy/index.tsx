import { Star } from '@/utils/generateStars';
import { useEffect, useRef } from 'react';

type GalaxyProps = {
  width: number;
  height: number;
  stars: Star[];
  tilt: number;
  verticalCompression: number;
  rotationSpeed: number;
};

// 참고 : https://codepen.io/carvacodes/pen/bdgQap
// 퍼져 있는 별들의 배열 stars를 받아서 tilt 만큼 기울어지고 verticalCompression만큼 압축된 별들을 그리는 컴포넌트
// 별들은 rotationSpeed로 회전한다
// 회전변환 이용
function Galaxy({ width, height, stars, tilt, verticalCompression, rotationSpeed }: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // 캔버스 크기 설정
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const tau = Math.PI * 2;

    function rotate() {
      rotationRef.current += rotationSpeed;
      if (rotationRef.current >= tau) {
        rotationRef.current = 0;
      }
    }

    let requestId: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // 별들을 회전하며 그리기
      stars.forEach(star => {
        const cosT = Math.cos(tilt);
        const sinT = Math.sin(tilt);
        const cosR = Math.cos(rotationRef.current);
        const sinR = Math.sin(rotationRef.current);

        // rotation만큼 회전 -> verticalCompression만큼 압축 -> tilt만큼 기울이기
        const A11 = cosT * cosR - verticalCompression * sinT * sinR;
        const A12 = -cosT * sinR - verticalCompression * sinT * cosR;
        const A21 = sinT * cosR + verticalCompression * cosT * sinR;
        const A22 = -sinT * sinR + verticalCompression * cosT * cosR;

        const tiltedX = centerX + star.x * A11 + star.y * A12;
        const tiltedY = centerY + star.x * A21 + star.y * A22;

        ctx.fillStyle = star.color;
        ctx.fillRect(tiltedX, tiltedY, 0.5 + Math.random(), 0.5 + Math.random());
      });

      rotate();
      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [width, height, rotationSpeed, stars, tilt, verticalCompression]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Galaxy;
