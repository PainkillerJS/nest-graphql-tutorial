import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../../users/models/user';
import { UsersService } from '../../users/users.service';
import { jwtSecret } from '../constants/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly userService: UsersService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtSecret,
		});
	}

	validate(validatePayload: { email: string; sub: string }): User {
		return this.userService.getUserByEmail(validatePayload.email);
	}
}
