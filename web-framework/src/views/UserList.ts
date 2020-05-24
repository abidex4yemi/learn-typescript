import { CollectionView } from './CollectionView';
import { User } from '../models/User';
import { UserProps } from '../models/interfaces';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    const userShow = new UserShow(itemParent, model);
    userShow.render();
  }
}
