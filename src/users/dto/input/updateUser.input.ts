import { Field, InputType } from '@nestjs/graphql';

import {
	IsArray,
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

import { User } from '../../models/user';

interface UpdateUserInputType
	extends Pick<User, 'userId'>,
		Partial<Pick<User, 'age' | 'isSubscribe'>> {}

@InputType()
export class UpdateUserInput implements UpdateUserInputType {
	@Field()
	@IsString()
	@IsNotEmpty()
	userId: string;

	@Field()
	@IsNotEmpty()
	@IsNumber()
	@IsOptional()
	age?: number;

	@Field({ nullable: true })
	@IsBoolean()
	@IsOptional()
	isSubscribe?: boolean;
}
