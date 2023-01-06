import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { User } from '../../models/user';

@InputType()
export class CreateUserInput implements Pick<User, 'age' | 'name' | 'email'> {
	@Field()
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	name: string;

	@Field()
	@IsNotEmpty()
	age: number;
}
