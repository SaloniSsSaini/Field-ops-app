import { useAlertStore } from '@store/alert.store';

export const startMockAlerts = () => {
  setInterval(() => {
    useAlertStore.getState().alerts.push({
      id: `evt-${Date.now()}`,
      machine_id: 'M-101',
      msg: 'Idle > 30 min',
      severity: 'high',
      status: 'CREATED',
      tenant_id: 'tenant-demo-001'
    });
  }, 30000);
};
