import { isOnline } from './network.service';
import { getPendingDowntime, addToSyncQueue, clearSyncItem } from '@db/queries';

export const runSync = async () => {
  const online = await isOnline();
  if (!online) return;

  // Example: sync downtime
  getPendingDowntime(rows => {
    rows.forEach(item => {
      // simulate API success
      setTimeout(() => {
        clearSyncItem(item.id);
      }, 500);
    });
  });
};
