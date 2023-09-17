module.exports = {
  name: "eval",
  aliases: ["js"],
  devOnly: true,
  execute: function (content, user, msg) {
    let e;
    try {
      e = eval(content)
        ? eval(content)
        : "";
    } catch (err) {
      e = "ERROR : " + err.message;
    }

    if (typeof e == typeof {}) e = JSON.stringify(e);
    msg.channel.send(e ? e : "NOTHING");
  },
};
