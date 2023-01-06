import { Field, InputType } from '@nestjs/graphql';

import { IsNotEmpty, IsString } from 'class-validator';

import { User } from '../../models/user';

@InputType()
export class DeleteUserInput implements Pick<User, 'userId'> {
	@Field()
	@IsNotEmpty()
	@IsString()
	userId: string;
}
