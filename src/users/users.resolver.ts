import {UseGuards} from '@nestjs/common';
import {Query, Resolver} from '@nestjs/graphql';
import {CurrentUser} from '../auth/current-user.decorator';
import {GqlAuthGuard} from '../auth/gql-auth.guard';
import {UserEntity} from './user.entity';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor() {}

  @Query(() => UserEntity)
  @UseGuards(GqlAuthGuard)
  currentUser(@CurrentUser() user: {userId: string}): UserEntity {
    return {id: user.userId};
  }
}
