import "reflect-metadata";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
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

  @Mutation(() => CountryEntity)
  async createCountry(@Arg("data") data: CountryInput): Promise<CountryEntity> {
    let country = new CountryEntity();
    country = Object.assign(country, data);
    await country.save();
    return country;
  }
}
