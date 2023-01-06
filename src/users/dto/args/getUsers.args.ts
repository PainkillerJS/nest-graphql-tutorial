import { ArgsType, Field } from '@nestjs/graphql';

import { IsArray } from 'class-validator';

import { User } from '../../models/user';

interface GetUsersArgsType {
	userIds: InstanceType<typeof User>['userId'][];
}

@ArgsType()
export class GetUsersArgs implements GetUsersArgsType {
	@Field(() => [String])
	@IsArray()
	userIds: string[];
}
