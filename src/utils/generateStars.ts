import { galaxyStarColors } from './colors';
import { getRandomInt } from './random';

export type Star = {
  x: number;
  y: number;
  color: string;
};

export function generateOvalGalaxyStars(starNumber: number, starDispersion: number, armNumber: number = 4) {
  const stars = [];
  const galaxyRadius = starDispersion * 30;

  for (let i = 0; i < starNumber; i++) {
    const ratio = i / starNumber;

    const x = Math.round(Math.random() * starDispersion * 2);
    const y = Math.round(Math.random() * starDispersion * 2);
    const mod = Math.random() * (starDispersion / 2);

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
