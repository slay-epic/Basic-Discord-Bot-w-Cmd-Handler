module.exports = {
  name: "ping",
  run(msg,args,client,discord){
    msg.channel.send(`Pong! \`${client.ws.ping}\`ms`)
  }
}
