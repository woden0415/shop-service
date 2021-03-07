

import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

const db: Promise<Connection> = createConnection();

export default db;
