import {Module} from '@nestjs/common';
import {GraphQLFederationModule} from '@nestjs/graphql';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({autoSchemaFile: true}),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
