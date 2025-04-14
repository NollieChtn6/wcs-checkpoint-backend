import { DataSource } from "typeorm";
import { CountryEntity } from "../entities/Country";
import { ContinentEntity } from "../entities/Continent";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./checkpoint.sqlite",
  entities: [CountryEntity, ContinentEntity],
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
