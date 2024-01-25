import { Config } from "../interfaces/config";

export const configs: {
  development: Config;
} = {
  development: {
    db: {
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    redis: {
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    },
    auth: {
      secret: process.env.SECRET,
    },
  },
};
