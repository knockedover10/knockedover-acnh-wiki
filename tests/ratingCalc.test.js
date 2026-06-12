import { describe, it, expect } from 'vitest';
import { calcRatingScore } from '../docs/js/ratingCalc.js';

describe('calcRatingScore — defaults', () => {
  it('all zeros → total 0, stars 1', () => {
    const r = calcRatingScore({});
    expect(r.total).toBe(0);
    expect(r.stars).toBe(1);
  });

  it('no-arg call works (defaults all inputs to 0)', () => {
    expect(calcRatingScore().stars).toBe(1);
  });
});

describe('calcRatingScore — devScore', () => {
  it('furniture contributes 1pt each', () =>
    expect(calcRatingScore({ furniture: 100 }).devScore).toBe(100));

  it('furniture is capped at 450', () =>
    expect(calcRatingScore({ furniture: 1000 }).devScore).toBe(450));

  it('exactly 450 furniture items hits the cap', () =>
    expect(calcRatingScore({ furniture: 450 }).devScore).toBe(450));

  it('villagers contribute 10pt each', () =>
    expect(calcRatingScore({ villagers: 10 }).devScore).toBe(100));

  it('devScore combines capped furniture and villagers', () =>
    expect(calcRatingScore({ furniture: 300, villagers: 5 }).devScore).toBe(350));
});

describe('calcRatingScore — sceneryScore', () => {
  it('trees capped at 220', () =>
    expect(calcRatingScore({ trees: 300 }).sceneryScore).toBe(220));

  it('flowers capped at 200', () =>
    expect(calcRatingScore({ flowers: 999 }).sceneryScore).toBe(200));

  it('fences contribute 0.2pt each', () =>
    expect(calcRatingScore({ fences: 50 }).sceneryScore).toBeCloseTo(10));

  it('fences capped at contribution of 20 (100 fences)', () =>
    expect(calcRatingScore({ fences: 200 }).sceneryScore).toBeCloseTo(20));

  it('sceneryScore combines all three components', () =>
    expect(calcRatingScore({ trees: 100, flowers: 100, fences: 50 }).sceneryScore).toBeCloseTo(210));
});

describe('calcRatingScore — weed penalty', () => {
  it('no penalty for 0 weeds', () =>
    expect(calcRatingScore({ weeds: 0 }).penalty).toBe(0));

  it('no penalty at exactly 100 weeds', () =>
    expect(calcRatingScore({ weeds: 100 }).penalty).toBe(0));

  it('penalty starts at 101 weeds: (101-100)*2 = 2', () =>
    expect(calcRatingScore({ weeds: 101 }).penalty).toBe(2));

  it('penalty at 200 weeds: (200-100)*2 = 200', () =>
    expect(calcRatingScore({ weeds: 200 }).penalty).toBe(200));

  it('total can go negative with heavy weeds', () => {
    const r = calcRatingScore({ furniture: 50, weeds: 300 });
    // devScore=50, penalty=(300-100)*2=400, total=50-400=-350
    expect(r.total).toBe(-350);
    expect(r.stars).toBe(1);
  });
});

describe('calcRatingScore — star thresholds', () => {
  // <45 → 1★, <90 → 2★, <160 → 3★, <250 → 4★, ≥250 → 5★
  it('total=0 → 1 star', () =>
    expect(calcRatingScore({}).stars).toBe(1));

  it('total=44 → 1 star (just below 2★ boundary)', () =>
    expect(calcRatingScore({ furniture: 44 }).stars).toBe(1));

  it('total=45 → 2 stars (2★ boundary)', () =>
    expect(calcRatingScore({ furniture: 45 }).stars).toBe(2));

  it('total=89 → 2 stars (just below 3★ boundary)', () =>
    expect(calcRatingScore({ furniture: 89 }).stars).toBe(2));

  it('total=90 → 3 stars (3★ boundary)', () =>
    expect(calcRatingScore({ furniture: 90 }).stars).toBe(3));

  it('total=159 → 3 stars (just below 4★ boundary)', () =>
    expect(calcRatingScore({ furniture: 159 }).stars).toBe(3));

  it('total=160 → 4 stars (4★ boundary)', () =>
    expect(calcRatingScore({ furniture: 160 }).stars).toBe(4));

  it('total=249 → 4 stars (just below 5★ boundary)', () =>
    expect(calcRatingScore({ furniture: 249 }).stars).toBe(4));

  it('total=250 → 5 stars (5★ boundary)', () =>
    expect(calcRatingScore({ furniture: 250 }).stars).toBe(5));

  it('maxed out inputs → 5 stars', () =>
    expect(calcRatingScore({ furniture: 450, villagers: 10, trees: 220, flowers: 200, fences: 100 }).stars).toBe(5));
});
