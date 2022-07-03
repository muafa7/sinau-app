import { openDB } from 'idb';
import CONFIG from '../global/config';


const { DATABASE_NAME, DATABASE_VERSION, OBJECT_USER, OBJECT_TOKEN} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_TOKEN, { keyPath: 'id' });
    database.createObjectStore(OBJECT_USER, { keyPath: 'id' });
  },
});

const ProgressIdb = {
  async getToken() {
    return (await dbPromise).getAll(OBJECT_TOKEN);
  },
  async getUser() {
    return (await dbPromise).getAll(OBJECT_USER);
  },
  async addToken(token) {
    const check = this.getToken()

    if (check.length===1) {
      (await dbPromise).delete(OBJECT_TOKEN, 1);
    }
    const tokenData = {
      id: 1,
      token: token
      
    }
    return (await dbPromise).add(OBJECT_TOKEN, tokenData);
  },
  async addUser(user) {
    const check = this.getUser()

    if (check.length===1) {
      (await dbPromise).delete(OBJECT_USER, 1);
    }
    const userData = {
      id: 1,
      user: user
      
    }
    return (await dbPromise).add(OBJECT_USER, userData);
  },
  async deleteToken() {
    return (await dbPromise).delete(OBJECT_TOKEN, 1) && (await dbPromise).delete(OBJECT_USER, 1);
  }
};

export default ProgressIdb;
