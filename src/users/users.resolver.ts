import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetUserArgs } from './dto/args/getUser.args';
import { GetUsersArgs } from './dto/args/getUsers.args';
import { CreateUserInput } from './dto/input/createUser.input';
import { DeleteUserInput } from './dto/input/DeleteUser.input';
import { UpdateUserInput } from './dto/input/updateUser.input';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly userService: UsersService) {}

	@Query(() => User, { name: 'user', nullable: true })
	getUser(@Args() getUserArgs: GetUserArgs): User {
		return this.userService.getUser(getUserArgs);
	}

	@Query(() => [User], { name: 'users', nullable: 'items' })
	getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
		return this.userService.getUsers(getUsersArgs);
	}

	@Mutation(() => User)
	createUser(@Args('createUserData') createUserData: CreateUserInput): User {
		return this.userService.createUser(createUserData);
	}

	@Mutation(() => User)
	updateUser(@Args('updateUserData') updateUser: UpdateUserInput): User {
		return this.userService.updateUser(updateUser);
	}

	@Mutation(() => User)
	deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
		return this.userService.deleteUser(deleteUserData);
	}
}
