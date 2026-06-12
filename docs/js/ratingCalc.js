/**
 * Calculates the ACNH island rating score from raw island stats.
 *
 * @param {object} inputs
 * @param {number} [inputs.furniture]
 * @param {number} [inputs.trees]
 * @param {number} [inputs.flowers]
 * @param {number} [inputs.fences]
 * @param {number} [inputs.villagers]
 * @param {number} [inputs.weeds]
 * @returns {{ devScore: number, sceneryScore: number, penalty: number, total: number, stars: number }}
 */
export function calcRatingScore({ furniture = 0, trees = 0, flowers = 0, fences = 0, villagers = 0, weeds = 0 } = {}) {
  const devScore     = Math.min(furniture * 1, 450) + (villagers * 10);
  const sceneryScore = Math.min(trees, 220) + Math.min(flowers, 200) + Math.min(fences * 0.2, 20);
  const penalty      = weeds > 100 ? (weeds - 100) * 2 : 0;
  const total        = devScore + sceneryScore - penalty;

  let stars;
  if      (total < 45)  stars = 1;
  else if (total < 90)  stars = 2;
  else if (total < 160) stars = 3;
  else if (total < 250) stars = 4;
  else                  stars = 5;

  return { devScore, sceneryScore, penalty, total, stars };
}
