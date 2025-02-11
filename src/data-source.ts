import "reflect-metadata"
import { DataSource } from "typeorm"

import * as dotenv from "dotenv";
import { User } from "./entity/User.entity";
import { Movie } from "./entity/Movies.entity";

const {
    DB
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
