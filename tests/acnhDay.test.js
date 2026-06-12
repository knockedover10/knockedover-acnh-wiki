import { describe, it, expect } from 'vitest';
import { getTodayKey } from '../docs/utils/acnhDay.js';

describe('getTodayKey', () => {
  it('returns YYYY-MM-DD format', () => {
    expect(getTodayKey(new Date('2026-04-15T12:00:00'))).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('at 5:00 AM returns that calendar day', () => {
    expect(getTodayKey(new Date('2026-04-15T05:00:00'))).toBe('2026-04-15');
  });

  it('at 12:00 PM returns that calendar day', () => {
    expect(getTodayKey(new Date('2026-04-15T12:00:00'))).toBe('2026-04-15');
  });

  it('at 11:59 PM returns that calendar day', () => {
    expect(getTodayKey(new Date('2026-04-15T23:59:59'))).toBe('2026-04-15');
  });

  // ACNH day starts at 5am — before 5am still counts as the previous day
  it('at 4:59 AM returns the previous calendar day', () => {
    expect(getTodayKey(new Date('2026-04-15T04:59:59'))).toBe('2026-04-14');
  });

  it('at midnight (00:00) returns the previous calendar day', () => {
    expect(getTodayKey(new Date('2026-04-15T00:00:00'))).toBe('2026-04-14');
  });

  it('pads month and day with leading zeros', () => {
    expect(getTodayKey(new Date('2026-01-05T10:00:00'))).toBe('2026-01-05');
  });

  it('handles month boundary at 4am — still previous month', () => {
    // 2026-05-01 at 04:00 → still 2026-04-30
    expect(getTodayKey(new Date('2026-05-01T04:00:00'))).toBe('2026-04-30');
  });

  it('handles year boundary at 3am — still previous year', () => {
    // 2027-01-01 at 03:00 → still 2026-12-31
    expect(getTodayKey(new Date('2027-01-01T03:00:00'))).toBe('2026-12-31');
  });

  it('does not mutate the passed-in Date object', () => {
    const d = new Date('2026-04-15T02:00:00');
    const original = d.toISOString();
    getTodayKey(d);
    expect(d.toISOString()).toBe(original);
  });
});
