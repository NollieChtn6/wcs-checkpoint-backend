import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { CountryEntity } from "./Country";

@Entity({ name: "continent" })
@ObjectType()
export class ContinentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ unique: true, nullable: false })
  @Field()
  code!: string;

  @Column({ unique: true, nullable: false })
  @Field()
  name!: string;

  @Field(() => [CountryEntity])
  @OneToMany(
    () => CountryEntity,
    (country) => country.continent,
  )
  countries?: CountryEntity[];
}
