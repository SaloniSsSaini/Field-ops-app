// ---------- COMMON ----------
export type ID = string;

export interface BaseEntity {
  id: ID;
  tenant_id: string;
}

// ---------- MACHINE ----------
export type MachineStatus = 'RUN' | 'IDLE' | 'OFF';

// ---------- DOWNTIME ----------
export interface DowntimeReason {
  parentCode: string;
  childCode: string;
}

// ---------- ALERT ----------
export type AlertSeverity = 'low' | 'medium' | 'high';
export type AlertStatus = 'CREATED' | 'ACKNOWLEDGED' | 'CLEARED';

// ---------- SYNC ----------
export type SyncEntityType =
  | 'downtime'
  | 'maintenance'
  | 'alert';

// ---------- USER ----------
export type UserRole = 'operator' | 'supervisor';
