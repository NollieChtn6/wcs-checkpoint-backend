import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { ObjectType, Field } from "type-graphql";
import { ContinentEntity } from "./Continent";

@Entity({ name: "country" })
@ObjectType()
export class CountryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ unique: true, nullable: false })
  @Field()
  code!: string;

  @Column({ unique: true, nullable: false })
  @Field()
  name!: string;

  @Column({ nullable: true })
  @Field()
  emoji?: string;

  @Field(() => ContinentEntity)
  @JoinColumn({ name: "continent" })
  @ManyToOne(
    () => ContinentEntity,
    (continent) => continent.countries,
    { onDelete: "CASCADE", nullable: false },
  )
  continent!: ContinentEntity;
}
