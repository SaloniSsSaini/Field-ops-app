/**
 * Convert milliseconds to hh:mm format
 */
export const msToHHMM = (ms: number): string => {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

/**
 * Calculate duration between two timestamps
 */
export const durationMs = (start: number, end: number): number => {
  return Math.max(0, end - start);
};

/**
 * Format timestamp to readable date & time
 */
export const formatDateTime = (ts: number): string => {
  const d = new Date(ts);
  return d.toLocaleString();
};
