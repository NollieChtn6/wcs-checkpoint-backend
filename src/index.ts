import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { initializeDataSource } from "./config/ db";

import { CountryResolver } from "./resolvers/CountryResolver";

const PORT = 8000;

const startServer = async () => {
  await initializeDataSource();
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`Server running on: ${url}`);
};

startServer();
