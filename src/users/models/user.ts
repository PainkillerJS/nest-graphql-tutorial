import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field()
	userId: string;

	@Field()
	email: string;

	@Field()
	name: string;

	@Field(() => Int)
	age: number;

	@Field({ nullable: true })
	isSubscribe?: boolean;

	@Field({ nullable: true })
	password?: string;
}
