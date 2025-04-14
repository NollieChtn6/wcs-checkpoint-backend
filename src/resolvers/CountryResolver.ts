import "reflect-metadata";
import { Field, InputType, Query, Resolver } from "type-graphql";
import { CountryEntity } from "../entities/Country";

@InputType()
class CountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji?: string;
}

@Resolver(CountryEntity)
export class CountryResolver {
  @Query(() => [CountryEntity])
  async countries(): Promise<CountryEntity[]> {
    const countries = await CountryEntity.find();
    return countries;
  }
}
