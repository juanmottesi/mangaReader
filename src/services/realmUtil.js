import Realm from 'realm';

const RealmSchema = {
  User: {
    name: 'User',
    primaryKey: 'idREALM',
    properties: {
      idREALM: 'string',
      id: 'string',
      username: 'string',
      mangas: 'Manga[]',
    },
  },
  Manga: {
    name: 'Manga',
    primaryKey: 'id',
    properties: {
      id: 'string',
      displayName: 'string',
      name: 'string',
      chapters: 'Chapter[]',
    },
  },
  Chapter: {
    name: 'Chapter',
    primaryKey: 'id',
    properties: {
      id: 'string',
      number: 'int',
      images: 'string[]',
    },
  },
};

const RealmConfig = {
  schema: [RealmSchema.User, RealmSchema.Manga, RealmSchema.Chapter],
  schemaVersion: 11,
  deleteRealmIfMigrationNeeded: true,
  asdmigration: () => {},
};

export default {
  isLoggedIn: () => (
    Realm.open(RealmConfig)
      .then(realm => realm.objectForPrimaryKey(RealmSchema.User.name, 'realmUser'))
  ),
  saveUser: (user) => {
    return Realm.open(RealmConfig)
      .then(realm => realm.write(() => realm.create(RealmSchema.User.name, { ...user, idREALM: 'realmUser' })))
      .then(() => user);
  },
  getUser: () => (
    Realm.open(RealmConfig)
      .then(realm => realm.objectForPrimaryKey(RealmSchema.User.name, 'realmUser'))
  ),
  logout: () => (
    Realm.open(RealmConfig)
      .then(realm => {
        const user = realm.objectForPrimaryKey(RealmSchema.User.name, 'realmUser');
        realm.write(() => realm.delete(user));
      })
  )
};
