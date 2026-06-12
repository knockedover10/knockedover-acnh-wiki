import { describe, it, expect } from 'vitest';
import { formatMonths, MONTH_NAMES } from '../docs/js/formatMonths.js';

describe('MONTH_NAMES', () => {
  it('has 13 entries (index 0 unused)', () => expect(MONTH_NAMES).toHaveLength(13));
  it('index 1 is Jan, index 12 is Dec', () => {
    expect(MONTH_NAMES[1]).toBe('Jan');
    expect(MONTH_NAMES[12]).toBe('Dec');
  });
});

describe('formatMonths — edge cases', () => {
  it('returns em-dash for null', () => expect(formatMonths(null)).toBe('—'));
  it('returns em-dash for undefined', () => expect(formatMonths(undefined)).toBe('—'));
  it('returns em-dash for empty array', () => expect(formatMonths([])).toBe('—'));
  it('returns single month name for one-element array', () => expect(formatMonths([5])).toBe('May'));
  it('deduplicates repeated months', () => expect(formatMonths([3, 3, 3])).toBe('Mar'));
});

describe('formatMonths — non-wrapping ranges', () => {
  it('consecutive months form a single range', () =>
    expect(formatMonths([4, 5, 6, 7, 8, 9])).toBe('Apr–Sep'));
  it('non-consecutive months form multiple ranges', () =>
    expect(formatMonths([3, 4, 5, 9, 10, 11, 12])).toBe('Sep–Dec; Mar–May'));
  it('two separate single months', () =>
    expect(formatMonths([3, 7])).toBe('Mar; Jul'));
  it('all 12 months forms one range Jan–Dec', () =>
    expect(formatMonths([1,2,3,4,5,6,7,8,9,10,11,12])).toBe('Jan–Dec'));
});

// These are regression tests for the wrap-around bug:
// The original code sorted ascending before scanning, so [12,1,2,3] became [1,2,3,12]
// and displayed "Jan–Mar; Dec" instead of the correct "Dec–Mar".
// The fix rotates to start after the largest gap so year-boundary crossings are preserved.
describe('formatMonths — year-wrap regression tests', () => {
  it('[12,1,2] → Dec–Feb', () =>
    expect(formatMonths([12, 1, 2])).toBe('Dec–Feb'));

  it('[11,12,1,2,3] → Nov–Mar (Bitterling)', () =>
    expect(formatMonths([11, 12, 1, 2, 3])).toBe('Nov–Mar'));

  it('[12,1,2,3,4,5] → Dec–May (Oarfish)', () =>
    expect(formatMonths([12, 1, 2, 3, 4, 5])).toBe('Dec–May'));

  it('[11,12,1,2] → Nov–Feb (Blowfish / Damselfly)', () =>
    expect(formatMonths([11, 12, 1, 2])).toBe('Nov–Feb'));

  it('[9,10,11,12,1,2,3] → Sep–Mar (Sturgeon)', () =>
    expect(formatMonths([9, 10, 11, 12, 1, 2, 3])).toBe('Sep–Mar'));

  it('[6,7,8,9,10,11,12,1] → Jun–Jan (Abalone)', () =>
    expect(formatMonths([6, 7, 8, 9, 10, 11, 12, 1])).toBe('Jun–Jan'));
});

describe('formatMonths — wrap-around with internal gaps', () => {
  it('[11,12,1,2,3,4,7,8,9] → Jul–Sep; Nov–Apr (Blue marlin)', () =>
    expect(formatMonths([11, 12, 1, 2, 3, 4, 7, 8, 9])).toBe('Jul–Sep; Nov–Apr'));

  it('[12,1,2,4,5,6,7,8,9] → Dec–Feb; Apr–Sep (Rajah Brooke birdwing)', () =>
    expect(formatMonths([12, 1, 2, 4, 5, 6, 7, 8, 9])).toBe('Dec–Feb; Apr–Sep'));

  it('[12,1,2,3,6,7,8,9] → Dec–Mar; Jun–Sep (Emperor butterfly, tie-breaking)', () =>
    expect(formatMonths([12, 1, 2, 3, 6, 7, 8, 9])).toBe('Dec–Mar; Jun–Sep'));
});
