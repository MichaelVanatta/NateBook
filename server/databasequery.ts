import type Knex from 'knex';
import knex from 'knex';

const pg = knex({
  client: 'pg',
  version: '18.0',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'nathanandnathan',
    database: 'postgres',
  },
});

declare module 'knex/types/tables' {
  interface User {
    id: number;
    username: string;
    password: string;
  }
}

let result

try {
   result = await pg.transaction(
    async (trx) => {
    return await trx('users').select('*');
}, { isolationLevel: 'read committed' }
)} catch (error) {
  console.error(error);
} finally {
    await pg.destroy();
}

console.log(result)