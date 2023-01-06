import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { graphqlConfig } from './config/graphqlConfig';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			useFactory: graphqlConfig,
		}),
		UsersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
