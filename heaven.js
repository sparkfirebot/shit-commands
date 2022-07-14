const Discord = require ("discord.js")
module.exports = {
config: {
  name: "heaven",
  category: "images",
  aliases: [],
  description: 'heaven',
},
  run: async (bot, message, args) => {
      let avatar = message.author.displayAvatarURL ({size: 512, dynamic: true});
      message.channel.send(new Discord.MessageEmbed()
            .setColor('7289da')
            .setTitle(`${message.author.username} went to heaven`)
            .setImage(`https://vacefron.nl/api/heaven?user=${avatar}`)
            .setFooter("welcome to heaven")
        );
    }
}
