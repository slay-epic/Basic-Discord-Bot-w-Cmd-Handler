# Basic Command Handler

what is this?

This is a basic command handler for your bot.

# How do I set it up?

First fork this repo then configuration is in the config.json file. You can replace the token with your bot token and the prefix to whatever prefix you want.

# How do I add commands?

Just add a JavaScript file under the commands folder.
Then make this as a reference on how to make a new command.

```
module.exports = {
  name: "Command Name",
  run(msg,args,client,discord){
    msg.channel.send("Hello World")
  }
}
```
