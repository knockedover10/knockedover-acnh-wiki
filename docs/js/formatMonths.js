export const MONTH_NAMES = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export function formatMonths(arr) {
  if (!arr || !arr.length) return '—';
  const unique = [...new Set(arr)].sort((a, b) => a - b);
  if (unique.length === 1) return MONTH_NAMES[unique[0]];

  // Find the largest gap between consecutive months (circular, wrapping Dec→Jan).
  // Rotating to start just after the largest gap ensures any year-boundary crossing
  // sits inside a single consecutive range rather than splitting it.
  let gapStartIdx = 0, maxGap = 0;
  for (let i = 0; i < unique.length; i++) {
    const cur  = unique[i];
    const next = unique[(i + 1) % unique.length];
    const gap  = next > cur ? next - cur : 12 - cur + next;
    if (gap >= maxGap) { maxGap = gap; gapStartIdx = (i + 1) % unique.length; }
  }
  const rotated = [...unique.slice(gapStartIdx), ...unique.slice(0, gapStartIdx)];

  const ranges = [];
  let start = rotated[0], prev = rotated[0];
  for (let i = 1; i < rotated.length; i++) {
    const cur = rotated[i];
    const isConsec = (cur === prev + 1) || (prev === 12 && cur === 1);
    if (isConsec) { prev = cur; }
    else { ranges.push([start, prev]); start = cur; prev = cur; }
  }
  ranges.push([start, prev]);

  return ranges
    .map(([s, e]) => s === e ? MONTH_NAMES[s] : `${MONTH_NAMES[s]}–${MONTH_NAMES[e]}`)
    .join('; ');
}
