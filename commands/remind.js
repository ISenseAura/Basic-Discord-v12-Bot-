module.exports = {
    name: "remind",
    aliases: ["js"],
    devOnly: true,
    execute: function (content, user, msg) {
        if(reminders[user.id]) reminders[user.id] = {};
        let opts = content.split(",");
        let when = opts[0];
        let ogWhen = when;
        let what = content.replace(when +",", "");
        let unit = "seconds";
        switch(when.charAt(when.length - 1)) {
            case "m" : {
                when = parseInt(when) * 60;
                unit = "Minutes";
            }
            break;

            case "h" : {
                when = parseInt(when) * 60 * 60;
                unit = "Hours";
            }
            break;

            case "d" : {
                when = parseInt(when) * 60 * 60 * 24;
                unit = "Days";
            }
            break;

            default :  {;
                unit = "Seconds";
            }

        }
     
        reminders[user.id] = setTimeout((msg, user, what) => {
            msg.channel.send(`* Reminder Of <@${user.id}> \n${what}`);
        }, parseInt(when) * 1000, msg, user, what);

        msg.channel.send("Reminder set for " + parseInt(ogWhen) + " " + unit);

    },
  };
  