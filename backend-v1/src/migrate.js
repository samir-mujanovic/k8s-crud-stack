import { query } from "./db.js";

const createTableSQL = `
CREATE TABLE IF NOT EXISTS clients_tb (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    job VARCHAR(100),
    rate NUMERIC,
    isactive BOOLEAN DEFAULT TRUE
);
`;

await query(createTableSQL);
console.log("Migration complete");
process.exit(0);