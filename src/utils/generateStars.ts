import { galaxyStarColors } from './colors';
import { gaussianRandom, getRandomInt } from './random';

export type Star = {
  x: number;
  y: number;
  color: string;
};

// 별 좌표 생성 방식 참고 : https://codepen.io/carvacodes/pen/bdgQap
export function generateSpiralGalaxyStars(starNumber: number, starDispersion: number, armNumber: number = 4) {
  const stars = [];
  const galaxyRadius = starDispersion * 30;

  for (let i = 0; i < starNumber; i++) {
    const ratio = i / starNumber;
    // 중심부에 별이 더 몰리도록 r 값을 sqrt로 변환

    const x = Math.round(gaussianRandom(0, 0.5) * starDispersion * 2);
    const y = Math.round(gaussianRandom(0, 0.5) * starDispersion * 2);
    const mod = Math.random() * starDispersion;

    const skew = galaxyRadius * ratio;
    const modSq = mod * mod;

    const angles = [];
    for (let j = 0; j < armNumber; j++) {
      angles.push(Math.PI * (2 * ratio + (2 / armNumber) * j));
    }

    for (const angle of angles) {
      stars.push({
        x: x + Math.cos(angle) * skew,
        y: y + Math.sin(angle) * skew,
        color: galaxyStarColors[getRandomInt(0, galaxyStarColors.length - 1)],
      });
      stars.push({
        x: x + Math.cos(angle) * skew + modSq,
        y: y + Math.sin(angle) * skew + modSq,
        color: galaxyStarColors[getRandomInt(0, galaxyStarColors.length - 1)],
      });
    }
  }

  return stars;
}

export function generateOvalGalaxyStars(starCount: number, radius: number) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    // 무작위 각도 (0~360도)
    const angle = Math.random() * Math.PI * 2;
    // 무작위 거리 (중심에서 퍼지는 범위 설정)
    const g = Math.abs(gaussianRandom(0, 1));
    const distance = g * radius;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const color = galaxyStarColors[getRandomInt(0, galaxyStarColors.length - 1)];

    stars.push({ x, y, color });
  }
  return stars;
}
