const fs = require("fs");

class MP {
  constructor() {
    this.commands = {};
    this.lastCommandUsedBy;
  }

  initCommands() {
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const cmd = require(`./commands/${file}`);
      this.commands[cmd.name] = cmd;
      if(cmd.aliases) {
        cmd.aliases.forEach((alias) => {
            this.commands[alias] = cmd;
        })
      }
    }
  }

  parse(msg) {
    Users.new(msg.author);

  
    if (msg.content.startsWith(Config.prefix)) return this.parseCommand(msg);
  }

  parseCommand(msg) {
    let cmd = msg.content.split(" ")[0].replace(Config.prefix, "");
    console.log(cmd);
    if (!this.commands[cmd]) return msg.reply("Command does not exist");
    let command = this.commands[cmd];
    let user = Users.get(msg.author.id);
    console.log(user.isDev());
    if (!user) return console.log("user does not exist");
    if (command.devOnly && !user.isDev()) return msg.reply("Access Denied");
    let rest = msg.content.replace(Config.prefix + cmd + " ", "");
    if (this.lastCommandUsedBy == user.id) console.log("Used by same user");
    command.execute(rest, user, msg);
    this.lastCommandUsedBy = user.id;

    // setTimeout()
  }
}

module.exports = new MP();
