const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios')
const { spawn, exec } = require('child_process')
const { prefix, Token } = require("./config.json")
const bent = require('bent')
 
client.on('ready', () => {
  console.log(`${client.user.tag} Dah Aktif!`);
});
 
client.on('message', pael => {
	try {
		async function pael() {
			body = pael.content
			const command = body.startsWith(prefix) ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : ''
			// if (chat.authorID === '804989448680374272') return // Copy Id Bot Okeehh
			switch(command) {
				case 'menu':
				case 'help':
					pael.reply("Menunya Dikit Doank Hehe\n\n\n/menu\n/help\n/ping\n/magernulis1 [teks]\n/magernulis2 [teks]\n/magernulis3 [teks]\n/hartatahta [To\n/neon\n/cloud\n/snow\n/3dluxury\n/3dgradient\n/blackpink")
					break
				case 'ping':
					pael.reply("Pong!")
					break
				case 'pastebin':
					var bdtrm = body.slice(10).trim().split('|')
            		const pstbn = await axios.get(`https://api.zeks.xyz/api/pastebin?apikey=apivinz&text=${bdtrm[0]}&name=${bdtrm[1]}`) 
	    			console.log(bdtrm[0])
	    			const { result } = pstbn.data
            		await pael.reply(`${result}`) 
            		break
				case 'magernulis1':
					const diTulis = body.slice(13)
					pael.reply("Harap Tunggu, Bot Sedang Menulis Di Buku 1!~")
					const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
					const panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
            		spawn('convert', [
                './magernulis1.jpg',
                '-font',
                './Zahraaa.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris,
    	        './magernulis1√.jpg'
            		])
            		.on('error', () => pael.reply("Error"))
	            	.on('exit', () => {
    	        		pael.reply('Sukses✓ Nulis DiBuku ✓\n\nYouTube : MFarelS CH\nInstagram : @mfarelsyahtiawan\nTwitter : @MSyahtiawan\nGitHub : @MFarelS\nSaweria : MFarelS\n\n© 2021 MFarelS✓', {files: ["./magernulis1√.jpg"]})
    	        	})
    	        	break
				case 'magernulis2':
					const diTulis2 = body.slice(13)
					pael.reply("Harap Tunggu, Bot Sedang Menulis Di Buku 1!~")
					const panjangKalimat2 = diTulis2.replace(/(\S+\s*){1,10}/g, '$&\n')
					const panjangBaris2 = panjangKalimat2.split('\n').slice(0, 30).join('\n')
            		spawn('convert', [
                './magernulis1.jpg',
                '-fill',
                '#001675',
                '-font',
                './Zahraaa.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris2,
    	        './magernulis1√.jpg'
            		])
            		.on('error', () => pael.reply("Error"))
	            	.on('exit', () => {
    	        		pael.reply('Sukses✓ Nulis DiBuku ✓\n\nYouTube : MFarelS CH\nInstagram : @mfarelsyahtiawan\nTwitter : @MSyahtiawan\nGitHub : @MFarelS\nSaweria : MFarelS\n\n© 2021 MFarelS✓', {files: ["./magernulis1√.jpg"]})
    	        	})
    	        	break
				case 'magernulis3':
					const diTulis3 = body.slice(13)
					pael.reply("Harap Tunggu, Bot Sedang Menulis Di Buku 1!~")
					const panjangKalimat3 = diTulis3.replace(/(\S+\s*){1,10}/g, '$&\n')
					const panjangBaris3 = panjangKalimat3.split('\n').slice(0, 30).join('\n')
            		spawn('convert', [
                './magernulis1.jpg',
                '-fill',
                '#8c1a00',
                '-font',
                './Zahraaa.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris3,
    	        './magernulis1√.jpg'
            		])
            		.on('error', () => pael.reply("Error"))
	            	.on('exit', () => {
    	        		pael.reply('Sukses✓ Nulis DiBuku ✓\n\nYouTube : Enraven YT\nInstagram : @raphser\nGitHub : paelkunz', {files: ["./magernulis1√.jpg"]})
    	        	})
    	        	break
    	        case 'hartatahta':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Harta Tahta")
					const thndr0 = body.slice(12)
					const embed0 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.zeks.xyz/api/hartatahta?text=${thndr0}&apikey=apivinz`)
					.setTimestamp()
					pael.reply(embed0)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed)
					break
    	        case 'snow':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text2 = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/snowtext?APIKEY=xteamtester&text=${encodeURIComponent(text2)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'cloud':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text3 = body.slice(7)
					const embed3 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/cloudtext?APIKEY=xteamtester&text=${encodeURIComponent(text3)}`)
					.setTimestamp()
					pael.reply(embed3)
					break
    	        case '3dluxury':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text4 = body.slice(10)
					const embed4 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/3dluxury?APIKEY=xteamtester&text=${encodeURIComponent(text4)}`)
					.setTimestamp()
					pael.reply(embed4)
					break
    	        case '3dgradient':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text5 = body.slice(12)
					const embed5 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/3dgradient?APIKEY=xteamtester&text=${encodeURIComponent(text5)}`)
					.setTimestamp()
					pael.reply(embed5)
					break
    	        case 'blackpink':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text6 = body.slice(11)
					const embed6 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text6)}`)
					.setTimestamp()
					pael.reply(embed6)
					break
    	        /*case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break
    	        case 'neon':
					pael.reply("Harap Tunggu, Bot Sedang Membuat Text Neon")
					const text = body.slice(6)
					const embed2 = new Discord.MessageEmbed()
					.setTitle("Amjayy Jadi")
					.setImage(`https://api.xteam.xyz/textpro/neon?APIKEY=xteamtester&text=${encodeURIComponent(text)}`)
					.setTimestamp()
					pael.reply(embed2)
					break*/
				}
			}
pael();
		} catch (e) {
			console.log(`Duh Ngab Error nih : ${e}`)
	}
});
 
client.login(Token);