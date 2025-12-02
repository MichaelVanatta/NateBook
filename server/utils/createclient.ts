import { Client } from "pg";

  export async function createClient(): Promise<Client> {
    return new Client({
    user: "postgres",
    password: "nathanandnathan",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false,
  });
}