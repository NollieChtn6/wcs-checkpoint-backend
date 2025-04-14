import { DataSource } from "typeorm";
import { CountryEntity } from "../entities/Country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./checkpoint.sqlite",
  entities: [CountryEntity],
  synchronize: true,
});

export const initializeDataSource = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("Data source has been initialized successfully!");
    })
    .catch((error) => {
      console.log("Error during data source initialization", error);
    });
};
