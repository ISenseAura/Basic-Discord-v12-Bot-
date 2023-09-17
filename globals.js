global.Users = require("./users")
global.MessageParser = require("./message-parser")
global.Config = require("./config")

global.reminders = {};

MessageParser.initCommands();