import { SQLTransaction } from 'expo-sqlite';

export const createTables = (tx: SQLTransaction) => {

  // Machines
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS machines (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT,
      type TEXT,
      status TEXT,
      tenant_id TEXT
    );
  `);

  // Downtime Events
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS downtime_events (
      id TEXT PRIMARY KEY NOT NULL,
      machine_id TEXT,
      start_ts INTEGER,
      end_ts INTEGER,
      reason_l1 TEXT,
      reason_l2 TEXT,
      photo_uri TEXT,
      synced INTEGER,
      tenant_id TEXT
    );
  `);

  // Maintenance Tasks
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS maintenance_tasks (
      id TEXT PRIMARY KEY NOT NULL,
      machine_id TEXT,
      title TEXT,
      completed INTEGER,
      notes TEXT,
      synced INTEGER,
      tenant_id TEXT
    );
  `);

  // Alerts
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS alerts (
      id TEXT PRIMARY KEY NOT NULL,
      machine_id TEXT,
      msg TEXT,
      severity TEXT,
      status TEXT,
      handled_by TEXT,
      handled_at INTEGER,
      tenant_id TEXT
    );
  `);

  // Sync Queue
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS sync_queue (
      id TEXT PRIMARY KEY NOT NULL,
      entity TEXT,
      payload TEXT,
      retries INTEGER,
      tenant_id TEXT
    );
  `);
};
