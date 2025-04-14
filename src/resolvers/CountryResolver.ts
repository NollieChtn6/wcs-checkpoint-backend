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

  @Query(() => CountryEntity)
  async countryByCode(@Arg("code") code: string): Promise<CountryEntity | null> {
    const country = await CountryEntity.findOne({ where: { code } });
    if (!country) {
      throw new Error(`Country with code ${code} not found`);
    }
    return country;
  }

  @Mutation(() => CountryEntity)
  async createCountry(@Arg("data") data: CountryInput): Promise<CountryEntity> {
    let country = new CountryEntity();
    country = Object.assign(country, data);
    await country.save();
    return country;
  }
}
