let cmd = msg.content.split(" ")[0];
switch (cmd) {
  case "ping":
    console.log(msg.author.id);
    msg.reply("Pong!");
    break;
  case "!meme":
    msg.channel.send("Here's your meme!");
    const img = await getMeme();
    msg.channel.send(img);
    break;
  case "!eye":
    msg.channel.send("You are now subscribed to eye reminders.");
     interval = setInterval (function () {
      msg.channel.send("Please take an eye break now!")
      .catch(console.error); 
    }, 3600000); //every hour
    break;
  case "!stop":
    msg.channel.send("I have stopped eye reminders.");
    clearInterval(interval);
    break;

case "!uptime": {
  let uptime = process.uptime();
      let uptimeText;
      if (uptime > 24 * 60 * 60) {
          let uptimeDays = Math.floor(uptime / (24 * 60 * 60));
          uptimeText = uptimeDays + " " + (uptimeDays === 1 ? "day" : "days");
          let uptimeHours = Math.floor(uptime / (60 * 60)) - uptimeDays * 24;
          if (uptimeHours) uptimeText += ", " + uptimeHours + " " + (uptimeHours === 1 ? "hour" : "hours");
      } else {
          uptimeText = Tools.toDurationString(uptime * 1000);
      }
      msg.channel.send("Uptime: **" + uptimeText + "**");

}
break;


case "!sound": {

      var VC = msg.member.voice;
      if (!VC) return msg.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
  VC.channel.join()
      .then(connection => {
          const dispatcher = connection.playFile('https://media.valorant-api.com/sounds/464327068.wem');
          dispatcher.on("end", end => {VC.channel.leave()});
      })
      .catch(console.error);

}
break;

  case "!eval":

  
  if(msg.author.id != "272799166756028416") return console.log("Access denied");
let e;
try {
e = eval(msg.content.replace("!eval ","")) ? eval(msg.content.replace("!eval ","")) : "";
}
catch(err) {
e = "ERROR : " + err.message;
}

if(typeof e == typeof {}) e = JSON.stringify(e);
    msg.channel.send(e.length ? e : "NOTHING");
   // clearInterval(interval);
    break;
}