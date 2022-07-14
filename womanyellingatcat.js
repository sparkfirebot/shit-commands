const Discord = require ("discord.js")
module.exports = {
config: {
  name: "womanyellingatcat",
  category: "images",
  aliases: ['wyac', 'yellcat', 'womanyellcat'],
  description: 'yelling at cat',
},
  run: async (bot, message, args) => {
      let avatar = message.author.displayAvatarURL ({size: 512, dynamic: true});
      message.channel.send(new Discord.MessageEmbed()
            .setColor('7289da')
            .setTitle(`${message.author.username} yelling at cat`)
            .setImage(`https://vacefron.nl/api/womanyellingatcat?woman=${avatar}&cat=https://cdn.discordapp.com/avatars/757780137449226272/8a6827d161074d61c1020107fd87a182.png`)
            .setFooter("yelling at cat\n\nmention capability coming soon")
        );
    }
}
