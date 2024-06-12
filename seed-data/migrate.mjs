import pg from 'pg';
import { createTable } from './create.mjs';
import { loadData } from './load.mjs';
import isDocker from 'is-docker';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: isDocker() ? 'db' : 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

pool.connect(async (err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to postgres db');
    await createTable(pool);
    await loadData(pool);
    process.exit(0);
  }
});
