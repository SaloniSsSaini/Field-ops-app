export const APP_NAME = 'Field Ops App';

export const TENANT_ID = 'tenant-demo-001';

export const MACHINE_STATUS = {
  RUN: 'RUN',
  IDLE: 'IDLE',
  OFF: 'OFF'
} as const;

export const ALERT_STATUS = {
  CREATED: 'CREATED',
  ACKNOWLEDGED: 'ACKNOWLEDGED',
  CLEARED: 'CLEARED'
} as const;

export const SYNC_RETRY_LIMIT = 3;
