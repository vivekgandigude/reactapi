import pg from "pg";
const Pool = pg.Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "CRUD",
  password: "admin",
  port: 5432,
  ssl: false,
});

export default pool;
