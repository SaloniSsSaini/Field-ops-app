/**
 * Lightweight UUID (offline-safe)
 * Example: evt-1703501234567-x9k3
 */
export const generateId = (prefix = 'id'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
};
