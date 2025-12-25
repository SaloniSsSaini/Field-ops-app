import db from './database';

// ---------- MACHINES ----------
export const insertMachine = (m: any) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT OR REPLACE INTO machines VALUES (?, ?, ?, ?, ?)`,
      [m.id, m.name, m.type, m.status, m.tenant_id]
    );
  });
};

export const getMachines = (cb: (rows: any[]) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM machines`,
      [],
      (_, { rows }) => cb(rows._array)
    );
  });
};

// ---------- DOWNTIME ----------
export const insertDowntime = (d: any) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO downtime_events VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        d.id,
        d.machine_id,
        d.start_ts,
        d.end_ts ?? null,
        d.reason_l1 ?? null,
        d.reason_l2 ?? null,
        d.photo_uri ?? null,
        d.synced ? 1 : 0,
        d.tenant_id
      ]
    );
  });
};

export const getPendingDowntime = (cb: (rows: any[]) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM downtime_events WHERE synced = 0`,
      [],
      (_, { rows }) => cb(rows._array)
    );
  });
};

// ---------- SYNC QUEUE ----------
export const addToSyncQueue = (item: any) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO sync_queue VALUES (?, ?, ?, ?, ?)`,
      [
        item.id,
        item.entity,
        JSON.stringify(item.payload),
        item.retries,
        item.tenant_id
      ]
    );
  });
};

export const clearSyncItem = (id: string) => {
  db.transaction(tx => {
    tx.executeSql(`DELETE FROM sync_queue WHERE id = ?`, [id]);
  });
};
