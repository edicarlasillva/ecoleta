import knex from "knex";

const connection = knex({
  client: "pg",
  connection: {
    database: "ecoleta",
    user: "postgres",
    password: "Carlinha123",
  },
});

export default connection;

// Migrations = Histórico do banco de dados
