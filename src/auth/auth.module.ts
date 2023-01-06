import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../users/users.module';

import { jwtSecret } from './constants/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthService } from './auth.service';

@Module({
	imports: [
		JwtModule.register({
			secret: jwtSecret,
			signOptions: { expiresIn: '3600s' },
		}),
		PassportModule.register({ defaultStrategy: 'jwt' }),
		UsersModule,
	],
	providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
