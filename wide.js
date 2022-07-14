const Discord = require ("discord.js")
module.exports = {
config: {
  name: "wide",
  category: "images",
  aliases: ['wiiide'],
  description: 'makes your avatar wide',
},
  run: async (bot, message, args) => {
      let avatar = message.author.displayAvatarURL ({size: 512, dynamic: true});
      message.channel.send(new Discord.MessageEmbed()
            .setColor('7289da')
            .setTitle(`Widened ${message.author.username}`)
            .setImage(`https://vacefron.nl/api/wide?image=${avatar}`)
            .setFooter("very wide")
        );
    }
}
