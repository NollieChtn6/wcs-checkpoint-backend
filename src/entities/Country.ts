import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { ObjectType, Field } from "type-graphql";

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
}
