import {
	BadRequestException,
	HttpException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../users/models/user';
import { UsersService } from '../users/users.service';

import { jwtSecret } from './constants/constants';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	private verifyToken(token: string): User {
		const decode = this.jwtService.verify<User>(token, {
			secret: jwtSecret,
		});

		const user = this.usersService.getUserByEmail(decode.email);

		if (!user) {
			throw new UnauthorizedException('Токен не действителен');
		}

		return user;
	}

	validate(email: string, password: string): User {
		const user = this.usersService.getUserByEmail(email);

		if (!user) {
			throw new HttpException('Пользователь не найден', 401);
		}

		const passwordIsValid = password === user.password;

		return passwordIsValid ? user : null;
	}

	login(user: User): { accessToken: string } {
		const payload = {
			email: user.email,
			sub: user.userId,
		};

		return {
			accessToken: this.jwtService.sign(payload),
		};
	}
}
