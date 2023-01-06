import type { GqlModuleOptions } from '@nestjs/graphql';

export const graphqlConfig = async (): Promise<
	Omit<GqlModuleOptions, 'driver'>
> => ({
	autoSchemaFile: true,
});
