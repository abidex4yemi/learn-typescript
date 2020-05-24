import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { UserProps } from './interfaces';
import { Collection } from './Collection';

const rootURL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new ApiSync<UserProps>(rootURL),
      new Eventing()
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      (json: UserProps): User => User.build(json)
    );
  }
}
