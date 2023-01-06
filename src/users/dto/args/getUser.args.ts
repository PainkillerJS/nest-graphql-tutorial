import { ArgsType, Field } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

import { User } from '../../models/user';

@ArgsType()
export class GetUserArgs implements Pick<User, 'userId'> {
	@Field()
	@IsNotEmpty()
	userId: string;
}
