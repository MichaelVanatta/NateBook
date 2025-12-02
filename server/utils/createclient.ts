import { Client } from "pg";

export default new Client({
    user: "postgres",
    password: "nathanandnathan",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false,
  });