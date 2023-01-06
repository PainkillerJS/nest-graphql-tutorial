import { Injectable } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { GetUserArgs } from './dto/args/getUser.args';
import { GetUsersArgs } from './dto/args/getUsers.args';
import { CreateUserInput } from './dto/input/createUser.input';
import { DeleteUserInput } from './dto/input/DeleteUser.input';
import { UpdateUserInput } from './dto/input/updateUser.input';
import { User } from './models/user';

@Injectable()
export class UsersService {
	private users: User[] = [];

	createUser(createUserData: CreateUserInput): User {
		const user: User = {
			userId: uuidv4(),
			...createUserData,
		};

		this.users.push(user);

		return user;
	}

	getUsers(getUsersArgs: GetUsersArgs): User[] {
		return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
	}

	getUser({ userId }: GetUserArgs): User {
		return this.users.find((user) => user.userId === userId);
	}

	updateUser(updateUser: UpdateUserInput): User {
		const user = this.users.find((user) => (user.userId = updateUser.userId));

		Object.assign(user, updateUser);

		return user;
	}

	deleteUser(deleteUserData: DeleteUserInput): User {
		const userIndex = this.users.findIndex(
			(user) => user.userId === deleteUserData.userId,
		);

		const user = this.users[userIndex];

		this.users.splice(userIndex);

		return user;
	}
}
