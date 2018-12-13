import RealmUtils from './realmUtil';

export default {
  isLoggedIn: () => RealmUtils.isLoggedIn(),
  saveUser: user => RealmUtils.saveUser(user),
  getUser: () => RealmUtils.getUser(),
  logout: () => RealmUtils.logout(),
};
