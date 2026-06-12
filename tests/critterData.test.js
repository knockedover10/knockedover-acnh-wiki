import { describe, it, expect } from 'vitest';
import { FISH, BUGS, SEA, CURRENT_MONTH, NEXT_MONTH } from '../docs/js/critterData.js';

describe('Array sizes', () => {
  it('FISH has 80 entries', () => expect(FISH).toHaveLength(80));
  it('BUGS has 80 entries', () => expect(BUGS).toHaveLength(80));
  it('SEA has 40 entries',  () => expect(SEA).toHaveLength(40));
});

describe('Required fields on every entry', () => {
  const all = [...FISH, ...BUGS, ...SEA];

  it('every entry has a non-empty name string', () =>
    all.forEach(c => {
      expect(typeof c.name).toBe('string');
      expect(c.name.length).toBeGreaterThan(0);
    }));

  it('every entry has a months array with 1–12 elements', () =>
    all.forEach(c => {
      expect(Array.isArray(c.months)).toBe(true);
      expect(c.months.length).toBeGreaterThanOrEqual(1);
      expect(c.months.length).toBeLessThanOrEqual(12);
    }));

  it('every month value is an integer 1–12', () =>
    all.forEach(c =>
      c.months.forEach(m => {
        expect(Number.isInteger(m)).toBe(true);
        expect(m).toBeGreaterThanOrEqual(1);
        expect(m).toBeLessThanOrEqual(12);
      })
    ));

  it('every entry has a numeric price', () =>
    all.forEach(c => expect(typeof c.price).toBe('number')));

  it('every entry has a boolean leaving field', () =>
    all.forEach(c => expect(typeof c.leaving).toBe('boolean')));
});

describe('leaving field integrity', () => {
  const all = [
    ...FISH.map(c => ({ ...c, _type: 'fish' })),
    ...BUGS.map(c => ({ ...c, _type: 'bugs' })),
    ...SEA.map(c => ({ ...c, _type: 'sea' })),
  ];

  it(`leaving===true iff available in month ${CURRENT_MONTH} AND not in month ${NEXT_MONTH}`, () => {
    const mismatches = all.filter(c => {
      const expected = c.months.includes(CURRENT_MONTH) && !c.months.includes(NEXT_MONTH);
      return c.leaving !== expected;
    });
    if (mismatches.length) {
      throw new Error(
        `leaving flag mismatch on: ${mismatches.map(c => `${c.name} (${c._type}): leaving=${c.leaving}, months=[${c.months}]`).join('; ')}`
      );
    }
  });

  it('exactly 7 critters are leaving this month', () => {
    const leaving = all.filter(c => c.leaving).map(c => c.name).sort();
    expect(leaving).toEqual([
      'Blue marlin',
      'Dab',
      'Sea cucumber',
      'Snow crab',
      'Spider crab',
      'Tarantula',
      'Tuna',
    ]);
  });
});

describe('No duplicate names within each type', () => {
  it('FISH names are unique', () => {
    const names = FISH.map(c => c.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('BUGS names are unique', () => {
    const names = BUGS.map(c => c.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('SEA names are unique', () => {
    const names = SEA.map(c => c.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
