/**
 * Returns the current ACNH "game day" key as YYYY-MM-DD.
 * ACNH's day starts at 5:00 AM; calling before 5am still counts as the previous day.
 *
 * @param {Date} [now] - Injected for testing; defaults to new Date()
 * @returns {string}
 */
export function getTodayKey(now = new Date()) {
  const d = new Date(now); // copy so we don't mutate the passed-in Date
  if (d.getHours() < 5) d.setDate(d.getDate() - 1);
  return (
    d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0')
  );
}
