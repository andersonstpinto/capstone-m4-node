import "reflect-metadata";
import { DataSource } from "typeorm";

require("dotenv").config();

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      })
    : new DataSource({
        type: "postgres",
        host: "db",
        port: 45432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,

        synchronize: false,
        logging: true,

        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });
