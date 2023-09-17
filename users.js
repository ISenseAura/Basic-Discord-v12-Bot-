class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.avatar = data.displayAvatarURL();
    this.bot = data.bot;
  }

  isDev() {
    console.log(this);
    if (Config.devs.includes(this.id)) return true;
    return false;
  }

  send(msg) {
    if (client.users.cache.get(this.id))
      return client.users.cache.get(this.id).send(msg);
  }
}

class Users {
  constructor() {
    this.users = {};
  }

  new(data) {
    if (this.users[data.id]) return;
    this.users[data.id] = new User(data);
    return this.users[data.id];
  }

  get(id) {
    if (this.users[id]) return this.users[id];
    return null;
  }

  getByUsername(name) {
    let keys = Object.keys(this.users);
    for (let i = 0; i < keys.length; i++) {
      if (this.users[keys[i]].name == name) return this.users[keys[i]];
    }
    return null;
  }
}

module.exports = new Users();
