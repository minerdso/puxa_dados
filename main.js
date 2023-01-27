
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const Jimp = require('jimp');
const util = require('util')
const cheerio = require("cheerio");
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
//const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { color, bgcolor } = require('./services/lib/color')
const { getHashedPassword, randomText } = require('./services/function');
const { checkPremium, addPremium, deletePremium, changeKey } = require("./services/premium");
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./services/lib/myfunc');
const { env } = require('process');
//const DepreciatedJimp = require('jimp/types')
const historico = JSON.parse(fs.readFileSync('./services/lib/consultas/historico.json'))
const antidoc = JSON.parse(fs.readFileSync('./services/antitravas/antidoc.json'))
const anticon = JSON.parse(fs.readFileSync('./services/antitravas/anticon.json'))
const antiloc = JSON.parse(fs.readFileSync('./services/antitravas/antiloc.json'))
const anticat = JSON.parse(fs.readFileSync('./services/antitravas/anticat.json'))
const antifigu = JSON.parse(fs.readFileSync('./services/antitravas/antifigu.json'))
const antifoto = JSON.parse(fs.readFileSync('./services/antitravas/antifoto.json'))
const antiaudio = JSON.parse(fs.readFileSync('./services/antitravas/antiaudio.json'))
const antivideo = JSON.parse(fs.readFileSync('./services/antitravas/antivideo.json'))
const antilink = JSON.parse(fs.readFileSync('./services/antilink/antilink.json'))


const varping = speed();
const ping = speed() - varping
const tempo_de_consulta = "300000"//ms
const tempo_de_consulta_NotPrem = "600000"
const consultaOFF = false
nameBot = "💽BOT PUXA🎲🎲🎲"
let vote = global.db.data.others.vote = []
let userr2 = global.db.data.users[m.sender]

  let prem2 = [
    `553193699721@s.whatsapp.net`, //flavio
  `554491150998@s.whatsapp.net`, //kauan
  `5511949356144@s.whatsapp.net`, //minerd
  `553194650227@s.whatsapp.net`, //minerd
  `5511959778542@s.whatsapp.net`, //katu
  `554299349363@s.whatsapp.net`, //ronaldo
  `5512988352530@s.whatsapp.net`, //anderon
  `5511917542326@s.whatsapp.net` //borges

  ]



let premGp = [
  "120363023855994109@g.us", //grupo todos bot
  "*120363041607027300@g.us", //canalminerdso
  
]




module.exports = client = async (client, m, chatUpdate, store) => {
  try {
    let usuario = global.db.data.users[m.sender]
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefixo = prefa//prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^-]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^-]/gi)[0] : "/" : prefa ?? global.prefa
    const isCmd = body.startsWith(prefixo)
    const command = body.startsWith(prefixo) ? body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase() : '';
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "Desconhecido"
    const botNumber = await client.decodeJid(client.user.id)
    const isDono = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const texto = q = args.join(" ")
    const text = q = args.join(" ")
    const c = args.join(' ')
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)

    // GRUPO
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isDoc = m.isGroup ? antidoc.includes(m.chat) : false
    const isCon = m.isGroup ? anticon.includes(m.chat) : false
    const isLoc = m.isGroup ? antiloc.includes(m.chat) : false
    const isCat = m.isGroup ? anticat.includes(m.chat) : false
    const isFig = m.isGroup ? antifigu.includes(m.chat) : false
    const isFoto = m.isGroup ? antifoto.includes(m.chat) : false
    const isAd = m.isGroup ? antiaudio.includes(m.chat) : false
    const isVide = m.isGroup ? antivideo.includes(m.chat) : false
    const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
   const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }
    const isVid = (m.mtype === 'videoMessage')
    const isDocumento = (m.mtype === 'documentMessage')
    const isAud = (m.mtype === 'audioMessage')
    const isContato = (m.mtype === 'contactsArrayMessage')
    const isContatox = (m.mtype === 'contactMessage')
    const isLocalização = (m.mtype === 'locationMessage')
    const isCatalogo = (m.mtype === 'productMessage')
    const isFigu = (m.mtype === 'stickerMessage')
    const ImgMessa = (m.mtype === 'imageMessage')
    const videoo = isVide ? '✓' : '✗'
    const figurinhaa = isFig ? '✓' : '✗'
    const fotoo = isFoto ? '✓' : '✗'
    const audioo = isAd ? '✓' : '✗'
    const catalogoo = isCat ? '✓' : '✗'
    const localizacaoo = isLoc ? '✓' : '✗'
    const contatoo = isCon ? '✓' : '✗'
    const documentoo = isDoc ? '✓' : '✗'
    const antlinkk = isAntiLink ? '✓' : '✗'
    const isPremium2 = prem2.includes(m.sender)
    const premm2 = isPremium2 ? 's' : 'n'
    const isPremiumGp = premGp.includes(m.chat)
    const premmGp = isPremiumGp ? 's' : 'n'
    const tokenvip = "SEU TOKEN"
    let sender = m.isGroup ? m.participant : m.key.remoteJid
    const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
    const horario = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    const msg_espera = `• Aguarde ${pushname}, Buscando  os 🎲🎲🎲🎲... ⚡️`

    const selo23 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `📍 COMUNICADO\n➥ Grupo: ${groupMetadata.subject}`, 'jpegThumbnail': {url : "https://telegra.ph/file/d39b6ffb6e3e16505a6df.jpg"} } } }

    const selo24 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙎𝙘-𝙎𝙚𝙖𝙧𝙘𝙝 © 🌙` } } }
    const selo25 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `💌 CONVITE 💌️\n➥ Grupo: ${groupMetadata.subject}`, 'jpegThumbnail': {url : "https://telegra.ph/file/d39b6ffb6e3e16505a6df.jpg"} } } }

    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = isPremium2 ? global.limitawal.premium : global.limitawal.free
      let user = global.db.data.users[m.sender]
      if (typeof user !== 'object') global.db.data.users[m.sender] = {}
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!isNumber(user.consultas)) user.consultas = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!isNumber(user.limit)) user.limit = limitUser
      } else global.db.data.users[m.sender] = {
        afkTime: -1,
        consultas: -1,
        afkReason: '',
        limit: limitUser,
      }

      let chats = global.db.data.chats[m.chat]
      if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
      if (chats) {
        if (!('mute' in chats)) chats.mute = false
        if (!('antilink' in chats)) chats.antilink = false
        if (!('boasvindas' in chats)) chats.boasvindas = false
      } else global.db.data.chats[m.chat] = {
        mute: false,
        antilink: false,
        boasvindas: false

      }

      let setting = global.db.data.settings[botNumber]
      if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
      if (setting) {
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = true
        if (!('templateImage' in setting)) setting.templateImage = true
        if (!('templateVideo' in setting)) setting.templateVideo = false
        if (!('templateGif' in setting)) setting.templateGif = false
        if (!('templateMsg' in setting)) setting.templateMsg = false
      } else global.db.data.settings[botNumber] = {
        status: 0,
        autobio: true,
        templateImage: true,
        templateVideo: false,
        templateGif: false,
        templateMsg: false,
      }

    } catch (err) {
      console.error(err)
    }

    function isDoubleByte(str) {
      for (let i = 0, n = str.length; i < n; i++) {
        if (str.charCodeAt(i) > 255) {
          return true;
        }
      }
      return false;
    }
    // PRIVADO E PUBLICO
    if (!client.public) {
      if (!m.key.fromMe) return
    }

    if (!m.isGroup && isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'purple')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(hr, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
    if (!m.isGroup && !isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(hr, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
    if (m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(hr, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
    if (!m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(hr, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)

    // RESETAR LIMITE A 12 HORAS
    let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
      let user = Object.keys(global.db.data.users)
      let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
      for (let jid of user) global.db.data.users[jid].limit = limitUser
      console.log('Limite Resetado')
    }, {
      scheduled: true,
      timezone: "America/Sao_Paulo"
    })


    // MUTAR
    if (db.data.chats[m.chat].mute && !isAdmins && !isDono) {
      return
    }

    // RESPONDER COMANDO COM MEDIA
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
      let { text, mentionedJid } = hash
      let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: client.user.id,
        quoted: m.quoted && m.quoted.fakeObj
      })
      messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
      messages.key.id = m.key.id
      messages.pushName = m.pushName
      if (m.isGroup) messages.participant = m.sender
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
      }
      client.ev.emit('messages.upsert', msg)
    }
    // services
    const noprem = (texto) => {
      var buttons7 = [
        { buttonId: `${prefixo}preços`, buttonText: { displayText: 'Escolher um Plano 💳' }, type: 1 }
      ]
      let buttonMessage7 = {
        text: `${texto}`,
        buttons: buttons7,
        headerType: 2
      }
      client.sendMessage(m.chat, buttonMessage7, { quoted: m })
    }
    const nopremgp = (texto) => {
      var buttons7 = [
        { buttonId: `${prefixo}preços`, buttonText: { displayText: 'Escolher um Plano 💳' }, type: 1 }
      ]
      let buttonMessage7 = {
        text: `${texto}`,
        buttons: buttons7,
        headerType: 2
      }
      client.sendMessage(m.chat, buttonMessage7, { quoted: m })
    }
    const cliente = (texto) => {
      if(!isPremium2){
              MsgAguarde(m.sender);
            };
      client.sendMessage(m.chat, { text: texto }, { quoted: selo24 })
    }
    const MsgAguarde = async (sender) => {
      //   m.reply(msg_espera)

      let user2 = global.db.data.users[m.sender]
      if(isPremium2) return
      if (m.chat == "120363043490723539@g.us") return
      if (m.chat == "120363044018548913@g.us") return
      user2.consultas = + new Date
      await sleep(90000)
      user2.consultas = -1

      console.log(m.sender + " Eliminado do tempo de espera")
      }

    const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
        return client.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : [] }, { quoted: m })
      }
      let type = mime.split("/")[0] + "Message"
      if (mime.split("/")[0] === "image") {
        return client.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : [] }, { quoted: m })
      } else if (mime.split("/")[0] === "video") {
        return client.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [] }, { quoted: m })
      } else if (mime.split("/")[0] === "audio") {
        return client.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg' }, { quoted: m })
      } else {
        return client.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : [] }, { quoted: m })
      }
    }
    const enviar = (texto) => {
      client.sendMessage(m.chat, { text: texto }, { quoted: m })
    }

    const delay = async (texto) => {
      client.sendMessage(m.chat, { text: `${texto}` })
      await sleep(50)
      exec("npm update")

    }
    const reagir = (id, key, emoji) => {
      const reactionMessage3 = {
        react: {
          text: emoji,
          key: key
        }
      }
      client.sendMessage(id, reactionMessage3)
    }

    const enviarbuton = (from, text, footer, buttons) => {
      return client.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons })
    }

    // ENVIAR BOTÃO COM IMAGEM
    const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
      buttonMessage = {
        image: { url: img1 },
        caption: text1,
        footer: desc1,
        buttons: but,
        headerType: 4
      }
      client.sendMessage(id, buttonMessage, { quoted: m })
    }
    const reply = (texto) => {
      client.sendMessage(m.chat, { text: texto }, { quoted: m })
    }

    const comunicado = async (id, msg) => { // FEITO POR DARK
      const groupMetadata5 = m.isGroup ? await client.groupMetadata(id).catch(e => { }) : ''
      const participants5 = m.isGroup ? await groupMetadata5.participants : ''
      for (let mem of participants5) {
        client.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: `${msg}` }, { quoted: selo23 })
      }
    }

    const consult = async (texto) => {
      var buttons7 = [
        { buttonId: `!del`, buttonText: { displayText: 'APAGAR 🗑️' }, type: 1 },
        { buttonId: `!copiar ${texto}`, buttonText: { displayText: 'COPIAR 📄' }, type: 2 }
      ]


      let buttonMessage7 = {
        text: `${texto}`,
        buttons: buttons7,
        headerType: 2
      }
      await sleep(800)
      client.sendMessage(m.chat, buttonMessage7, { quoted: m })

      if (historico.includes(sender)) {
        return console.log("Enviando consulta..")
      } else {
        historico.push(sender)
        fs.writeFileSync('./services/lib/consultas/historico.json', JSON.stringify(historico))
        await sleep(300000).then(res => {
          console.log(sender + " => Apagado do historico")
          var dellhis = sender
          var positiovc = historico.indexOf(dellhis)
          historico.splice(positiovc, 1)
          fs.writeFileSync('./services/lib/consultas/historico.json', JSON.stringify(historico))
        })
      }
    };


    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      m.reply(`Não marque ele, ele esta offline ${reason ? 'com a razão ' + reason : 'por motivos desconhecidos'}

Offline por ${clockString(new Date - afkTime)}`.trim())
    }

    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender]
      m.reply(`Você saiu do AFK (offline) ${user.afkReason ? ' depois ' + user.afkReason : ''}

Offline por ${clockString(new Date - user.afkTime)}
`.trim())
      user.afkTime = -1
      user.afkReason = ''
    }

    if (ImgMessa) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isFoto) return
        if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        if (m.sender == '554491150998@whatsapp.net') return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x️] FOTO DETECTADA!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)!')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isVid) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isVide) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x️] VÍDEO DETECTADO!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)!')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }


    if (isUrl(q) || q.includes(".xyz") || q.includes(".io")) {
      if (body.startsWith("/")) return
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isAntiLink) return
        if (isAdmins) return
        gplink = await client.groupInviteCode(m.chat)
        if(q.includes(gplink)) return m.reply("Link do grupo detectado")
        m.reply('[x️] LINK DETECTADO!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)!')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }

    if (isDocumento) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isDoc) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x️] DOCUMENTO DETECTADO!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)!')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isAud) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isAd) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x️] ÁUDIO DETECTADO')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isFigu) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isFig) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x] FIGURINHA DETECTADO [x]')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO [x]')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isContatox) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isCon) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x] CONTATO DETECTADO [x]')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO [x]')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isContato) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isCon) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x] CONTATO DETECTADO!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isLocalização) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isLoc) return
       if (isDono) return m.reply(`→ Voce é meu dono, então pode!`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x️] LOCALIZAÇÃO DETECTADA!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)!')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    }
    if (isCatalogo) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return
        if (!isCat) return
        if (isCreator) return m.reply(`➥ Voce é meu dono, então pode! :)`)
       if (isAdmins) return m.reply(`→ Você é adm, fica tranquilo que não vou te remover!`)
        if (isPremium2) return m.reply('→ Você possui acesso premium, não irei te remover')
        m.reply('[x] CATALOGO DETECTADO!')
        await sleep(200)
        m.reply('[x] VOCE SERÁ BANIDO(A)')
        await sleep(700)
        await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("⚠️ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
      }
    };

    if (!m.isGroup && !isPremium2) return m.reply("→ Acesso negado!\nVocê não possui acesso premium para usar o bot no privado, caso queira renovar o plano, digite /dono no grupo.")
    switch (command) {


      case 'antilink': case 'semlink': {
      // if (!isRegistrar) return m.reply(semreg)
      if (!m.isGroup) return m.reply(msg.grupo)
         if (!isBotAdmins) return m.reply(msg.botAdmin)
         if (!isAdmins && !isDono) return m.reply(msg.admin)
         if (q.toLowerCase() == 'on'){
      if (isAntiLink) return m.reply(`⚠️ Anti-link já está ativado!`)
       semlink = `s`
      antilink.push(m.chat)
         fs.writeFileSync('./services/antilink/antilink.json', JSON.stringify(antilink))
        m.reply(`✅ Antilink ativado com sucesso!`)
       } else if (q.toLowerCase() == 'off'){
         if (!isAntiLink) return m.reply(`⚠️ Anti-link já está desativado!`)
         semlink = `n`
       var ini = antilink.indexOf(m.chat)
      antilink.splice(ini, 1)
      fs.writeFileSync('./services/antilink/antilink.json', JSON.stringify(antilink))
      m.reply(`❌ Anti-link desativado com sucesso!`)
      } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI LINK [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 𝙡𝙞𝙣𝙠 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })

      }
      }
      break


      case 'anticon': case 'semcontato': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isCon) return m.reply(`➥ Anti-contato já está ativado! ⚠️`)
          anticon.push(m.chat)
          fs.writeFileSync('./services/antitravas/anticon.json', JSON.stringify(anticon))
          m.reply(`➥ Anti-contato ativado com sucesso! ✅`)
        } else if (q === 'off') {
          if (!isCon) return m.reply(`➥ Anti-contato já está desativado! ⚠️`)
          var ini = anticon.indexOf(m.chat)
          anticon.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/anticon.json', JSON.stringify(anticon))
          m.reply(`➥ Anti-contato desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI CONTATO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 contato 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break

      case 'anticat': case 'semcatalogo': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isCat) return m.reply(`➥ Anti-catalogo já está ativado! ⚠️`)
          anticat.push(m.chat)
          fs.writeFileSync('./services/antitravas/anticat.json', JSON.stringify(anticat))
          m.reply(`➥ Anti-catalogo ativado com sucesso! ✅`)
        } else if (q === 'off') {
          if (!isCat) return m.reply(`➥ Anti-catalogo já está desativado! ⚠️`)
          var ini = anticat.indexOf(m.chat)
          anticat.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/anticat.json', JSON.stringify(anticat))
          m.reply(`➥ Anti-catalogo desativado com sucesso! ❌`)
        } else if (!q) {
       client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI CATÁLOGO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 catálogo 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'antidoc': case 'semdocumento': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isDoc) return m.reply(`➥ Anti-documento já está ativado! ⚠️`)
          antidoc.push(m.chat)
          fs.writeFileSync('./services/antitravas/antidoc.json', JSON.stringify(antidoc))
          m.reply(`➥ Anti-documento ativado com sucesso! ✅`)
        } else if (q === 'off') {
          if (!isDoc) return m.reply(`➥ Anti-documento já está desativado! ⚠️`)
          var ini = antidoc.indexOf(m.chat)
          antidoc.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antidoc.json', JSON.stringify(antidoc))
          m.reply(`➥ Anti-documento desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI DOCUMENTO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 documento 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }



      case 'add1':
try {
if (!m.isGroup) return m.reply(msg.grupo)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins && !isDono) return m.reply(msg.admin)
member = texto.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await client.groupParticipantsUpdate(m.chat, [member], 'add')
linkgp = await client.groupInviteCode(m.chat)
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('*[ ! ] Erro: Este membro já está no grupo*')
if(inv[0].code == 403) return enviar('*[ ! ] Erro: A conta do usuário é privada*')
if(inv[0].code == 408) return enviar('*[ ! ] Erro: O Membro saiu recentemente*')
if(inv[0].code == 401) return enviar('*[ ! ] Erro: O membro bloqueou o bot*')
} catch(e) {
return m.reply(e)
}
break



case 'add2':
  try {
  if (!m.isGroup) return m.reply(msg.grupo)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isAdmins && !isDono) return m.reply(msg.admin)
  entah = m.quoted.message.extendedTextMessage.contextInfo.participant
  response = await client.groupParticipantsUpdate(m.chat, [entah], 'add')
  o = response.participants[0]
  linkgc = await client.groupInviteCode(m.chat)
  let inv = (Object.values(o))
  if(inv[0].code == 409) return enviar('*[ ! ] Falhou, o alvo já está no grupo*')
  if(inv[0].code == 403) return enviar('*[ ! ] Falhou, a conta do alvo é privada*')
  if(inv[0].code == 403) return enviar('*[ ! ] Falhou, a conta do alvo é privada*')
  if(inv[0].code == 408) return enviar('*[ ! ] Falhou, o alvo acabou de sair*')
  if(inv[0].code == 401) return enviar('*[ ! ] Falhou, o alvo bloqueou o bot*')
  } catch(e) {
  return m.reply(e)
  }
  break



case 'fechargrupo':
case 'fechargp':
case 'grupofechar':
case 'fechar':
  if (!m.isGroup) return m.reply(msg.grupo)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isAdmins && !isDono) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, 'announcement')
m.reply('_➥ Grupo Fechado com sucesso_')
break


case 'abrir':
case 'abrirgp':
case 'abrirgrupo':
case 'gpabrir':
  if (!m.isGroup) return m.reply(msg.grupo)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isAdmins && !isDono) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, 'not_announcement')
m.reply('_➥ Grupo Aberto com sucesso_')
break


case 'limitar':
case 'limitargp':
addFilter(from)
if (!m.isGroup) return m.reply(msg.grupo)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins && !isDono) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, 'locked')
m.reply('_➥ Grupo limitado com sucesso_')
break


case 'livre':
addFilter(from)
if (!m.isGroup) return m.reply(msg.grupo)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins && !isDono) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, "unlocked")
m.reply("_➥ Grupo livre com sucesso_")
break

case "exit":
case 'tchaubot':
  if (!m.isGroup) return m.reply(msg.grupo)
  if (!isAdmins && !isDono) return m.reply(msg.admin)
try {
	m.reply('Bye-Bye...')
	await sleep(1000)
await client.groupLeave(m.chat)
} catch(e) {
console.log(e)
m.reply(e)
}
break



      case 'antiaudio': case 'semaudio': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isAd) return m.reply(`➥ Anti-audio já está ativado! ⚠️`)
          antiaudio.push(m.chat)
          fs.writeFileSync('./services/antitravas/antiaudio.json', JSON.stringify(antiaudio))
          m.reply(`➥ Anti-audio ativado com sucesso!  ✅`)
        } else if (q === 'off') {
          if (!isAd) return m.reply(`➥ Anti-audio já está desativado! ⚠️`)
          var ini = antiaudio.indexOf(m.chat)
          antiaudio.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antiaudio.json', JSON.stringify(antiaudio))
          m.reply(`➥ Anti-audio desativado com sucesso!  ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI AUDIO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 áudio 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'antivideo': case 'semvideo': case '/antivideo': case '/semvideo': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isVide) return m.reply(`➥ Anti-video já está ativado! ⚠️`)
          antivideo.push(m.chat)
          fs.writeFileSync('./services/antitravas/antivideo.json', JSON.stringify(antivideo))
          m.reply(`➥ Anti-video ativado com sucesso!  ✅`)
        } else if (q === 'off') {
          if (!isVide) return m.reply(`➥ Anti-video já está desativado! ⚠️`)
          var ini = antivideo.indexOf(m.chat)
          antivideo.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antivideo.json', JSON.stringify(antivideo))
          m.reply(`➥ Anti-video desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI VIDEO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 vídeo 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'antiloc': case 'semlocalização': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isLoc) return m.reply(`➥ Anti-localização já está ativado! ⚠️`)
          antiloc.push(m.chat)
          fs.writeFileSync('./services/antitravas/antiloc.json', JSON.stringify(antiloc))
          m.reply(`➥ Anti-localização ativado com sucesso!  ✅`)
        } else if (q === 'off') {
          if (!isLoc) return m.reply(`➥ Anti-localização já está desativado! ⚠️`)
          var ini = antiloc.indexOf(m.chat)
          antiloc.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antiloc.json', JSON.stringify(antiloc))
          m.reply(`➥ Anti-localização desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI LOCALIZAÇÃO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 localização 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'antifoto': case 'semfoto': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isFoto) return m.reply(`➥ Anti-foto já está ativado! ⚠️`)
          antifoto.push(m.chat)
          fs.writeFileSync('./services/antitravas/antifoto.json', JSON.stringify(antifoto))
          m.reply(`➥ Anti-foto ativado com sucesso! ✅`)
        } else if (q === 'off') {
          if (!isFoto) return m.reply(`➥ Anti-foto já está desativado! ⚠️`)
          var ini = antifoto.indexOf(m.chat)
          antifoto.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antifoto.json', JSON.stringify(antifoto))
          m.reply(`➥ Anti-foto desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI FOTO [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 foto 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'antifig': case 'semfigurinha': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        if (q === 'on') {
          if (isFig) return m.reply(`➥ Anti-figurinha já está ativado! ⚠️`)
          antifigu.push(m.chat)
          fs.writeFileSync('./services/antitravas/antifigu.json', JSON.stringify(antifigu))
          m.reply(`➥ Anti-figurinha ativado com sucesso! ✅`)
        } else if (q === 'off') {
          if (!isFig) return m.reply(`➥ Anti-figurinha já está desativado! ⚠️`)
          var ini = antifigu.indexOf(m.chat)
          antifigu.splice(ini, 1)
          fs.writeFileSync('./services/antitravas/antifigu.json', JSON.stringify(antifigu))
          m.reply(`➥ Anti-figurinha desativado com sucesso! ❌`)
        } else if (!q) {
      client.sendMessage(m.chat, {
        text:  `[⚠️] ANTI FIGU [⚠️]\n\n• 𝙀𝙨𝙨𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙩𝙞𝙫𝙖𝙙𝙤, 𝙛𝙖𝙧𝙖̃ 𝙦𝙪𝙚 𝙤 𝙗𝙤𝙩 𝙧𝙚𝙢𝙤𝙫𝙖 𝙤 𝙪𝙨𝙪́𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 figurinha 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.`,
        buttons: [
        { buttonId: `${prefixo+command} on`, buttonText: { displayText: 'Ativar ✅' }, type: 1 },
        { buttonId: `${prefixo+command} off`, buttonText: { displayText: 'Desativar ❌' }, type: 1 }
      ],
        headerType: 2
      }, { quoted: m })
        }
      }
        break
      case 'desativarall': {
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        //await sleep(200)
        var ini = antifigu.indexOf(m.chat)
        antifigu.splice(ini, 1)
        fs.writeFileSync('./services/antitravas/antifigu.json', JSON.stringify(antifigu))
        //await sleep(200)
        var ini2 = antifoto.indexOf(m.chat)
        antifoto.splice(ini2, 1)
        fs.writeFileSync('./services/antitravas/antifoto.json', JSON.stringify(antifoto))
        //await sleep(200)
        var ini3 = antiloc.indexOf(m.chat)
        antiloc.splice(ini3, 1)
        fs.writeFileSync('./services/antitravas/antiloc.json', JSON.stringify(antiloc))
        //await sleep(200)
        var ini4 = antivideo.indexOf(m.chat)
        antivideo.splice(ini4, 1)
        fs.writeFileSync('./services/antitravas/antivideo.json', JSON.stringify(antivideo))
        //await sleep(200)
        var ini5 = anticat.indexOf(m.chat)
        anticat.splice(ini5, 1)
        fs.writeFileSync('./services/antitravas/anticat.json', JSON.stringify(anticat))
        //await sleep(200)
        var ini6 = antiaudio.indexOf(m.chat)
        antiaudio.splice(ini6, 1)
        fs.writeFileSync('./services/antitravas/antiaudio.json', JSON.stringify(antiaudio))
        //await sleep(200)
        var ini7 = antidoc.indexOf(m.chat)
        antidoc.splice(ini7, 1)
        fs.writeFileSync('./services/antitravas/antidoc.json', JSON.stringify(antidoc))
        //await sleep(200)
        var ini8 = anticon.indexOf(m.chat)
        anticon.splice(ini8, 1)
        fs.writeFileSync('./services/antitravas/anticon.json', JSON.stringify(anticon))
        /*await sleep(200)
         var ini9 = antilink.indexOf(m.chat)
        antilink.splice(ini9, 1)
        fs.writeFileSync('./services/antilink/antilink.json', JSON.stringify(antilink)) */
        m.reply(`➥ Todos os sistemas de proteção foram desativado!`)
      }
        break
      case 'ativarall': {
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        await sleep(200)
        antilink.push(m.chat)
        fs.writeFileSync('./services/antilink/antilink.json', JSON.stringify(antilink))
        await sleep(200)
        antiloc.push(m.chat)
        fs.writeFileSync('./services/antitravas/antiloc.json', JSON.stringify(antiloc))
        await sleep(200)
        antidoc.push(m.chat)
        fs.writeFileSync('./services/antitravas/antidoc.json', JSON.stringify(antidoc))
        await sleep(200)
        anticon.push(m.chat)
        fs.writeFileSync('./services/antitravas/anticon.json', JSON.stringify(anticon))
        await sleep(200)
        antiaudio.push(m.chat)
        fs.writeFileSync('./services/antitravas/antiaudio.json', JSON.stringify(antiaudio))
        await sleep(200)
        antivideo.push(m.chat)
        fs.writeFileSync('./services/antitravas/antivideo.json', JSON.stringify(antivideo))
        await sleep(200)
        antifoto.push(m.chat)
        fs.writeFileSync('./services/antitravas/antifoto.json', JSON.stringify(antifoto))
        await sleep(200)
        anticat.push(m.chat)
        fs.writeFileSync('./services/antitravas/anticat.json', JSON.stringify(anticat))
        m.reply(`⚠️ Todos os sistemas de proteção foram ativado com sucesso!`)
      }
        break
      case 'gpsistema': case 'gppainel': case 'painelgp': case 'painelgrupo': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(msg.admin)
        //   blaimg = await getBuffer(res.all[0].image)
        blaa = `🛡️ PAINEL DE PROTEÇÃO 🛡️

╭────────────╮
┃➥ Anti-link: ${antlinkk}
┃➥ Anti-fig: ${figurinhaa}
┃➥ Anti-cat: ${catalogoo}
┃➥ Anti-loc: ${localizacaoo}
┃➥ Anti-doc: ${documentoo}
│➥ Anti-con: ${contatoo}
│➥ Anti-foto: ${fotoo}
│➥ Anti-video: ${videoo}
│➥ Anti-audio: ${audioo}
╰────────────╯`
        m.reply(blaa)
      }
        break

      case 'deltoken': {
        if (!isDono) return m.reply(msg.dono)
        reload = randomText(99)
        await changeKey(`${text}`, `${reload}off_`)
        m.reply(`➥ Token deletado com sucesso!`)
      }
        break


        case 'ping': {
          if (!isDono) return m.reply(msg.dono)
      m.reply("Executando teste de ping...")
      await sleep(2000)
              const used = process.memoryUsage()
              const cpus = os.cpus().map(cpu => {
                  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
            return cpu
              })
              const cpu = cpus.reduce((last, cpu, _, { length }) => {
                  last.total += cpu.total
                  last.speed += cpu.speed / length
                  last.times.user += cpu.times.user
                  last.times.nice += cpu.times.nice
                  last.times.sys += cpu.times.sys
                  last.times.idle += cpu.times.idle
                  last.times.irq += cpu.times.irq
                  return last
              }, {
                  speed: 0,
                  total: 0,
                  times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
              }
              })
              let timestamp = speed()
              let latensi = speed() - timestamp
              neww = performance.now()
              oldd = performance.now()
              respon = `
Response Speed: ${latensi.toFixed(4)}\nSegundos: ${oldd - neww}\n_milisegundos_\n\nRuntime : ${runtime(process.uptime())}

Info Server 💻
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Memory Usaage NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
              `.trim()
             m.reply(respon)
          }
          break


          case 'menu': case 'consultas': {
            // if (!isRegistrar) return m.reply(semreg)
            sections = [
           {
            title: "~> 𝙄𝙉𝙁𝙊 𝘿𝙊 𝘽𝙊𝙏 🤖",
                rows: [
                 
              { title: "➧ Grupos do bot", rowId: "!gbot", description: "Consultas Gratuitas" },
              { title: "➧ Regras do grupo", rowId: "!rules", description: "Leia as regras para evitar ser banido(a)" },
              { title: "➧ Loja do Bot 🛒", rowId: "!loja", description: "loja de produtos a venda" },
              { title: "➧ Revendedores ©", rowId: "!revendedores", description: "Desenvolvedores, e revendedores oficiais!" },
              { title: "➧ Painel Do Grupo", rowId: "!gppainel", description: "Painel trava do grupos anti-all" },
              { title: "➧ Compre sua api", rowId: "!apis", description: "Api de busca" },
              { title: "➧ Aluguel ou compre", rowId: "!loja", description: "Compre ou alugue o  bot para seu grupo" }
   
                ]
    
              }
            ]
    
            txtf = `
            ☬✞ CONSULTAS DISPONIVEL ✞☬

            🎲 CPF 
            🎲 CNPJ 
            🎲 IP
            🎲 CEP 
            🎲 SCORE 
            🎲 NOME 
            🎲 PLACA 
            🎲 TELEFONE 
            🎲 TELEFONE 1
            🎲 TELEFONE FIXO           
            ━━━━━━━━━━━━━━━━━━`
            listMessage = {
    
              text: txtf,
              footer: "Consultas free liberadas de 5 em 5 minutos para segurança do sistema!",
              title: "💽BOT PUXA🎲🎲🎲",
              buttonText: "Clique para ver️ 🖱️",
              sections
            }
    
            client.sendMessage(m.chat, listMessage, { quoted: m })
          }
    
    
    
    
    
    
            break

      case 'tiratempo': {
        if (!isDono && !isPremium2) return m.reply(`➥ Somente usuário premium pode utilizar esse comando!`)
        usuario.consultas = -1
        console.log("Eliminado do tempo de espera")
        m.reply(`Tempo de espera retirado com sucesso com sucesso!`)
      }
        break

      case 'resetatempo': {
        if (!isDono) return m.reply(msg.dono)
        let uers = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + ''
        let user99 = global.db.data.users[uers]
        let nmrmencionado = uers.replace("@s.whatsapp.net", "")
        if (!nmrmencionado) return m.reply(`➥ Marque um usuário ou digite o número!`)
        user99.consultas = -1
        console.log(nmrmencionado + " Eliminado do tempo de espera")
        m.reply(`➥ Você resetou o tempo de espera do usuário ${nmrmencionado}!`)
      }
        break
      case 'revendedores': {
        client.sendContact(m.chat, global.revendedores, m)
      }
break


case 'dono': {
  client.sendContact(m.chat, global.owner, m)
}
break



case 'apisc': case 'apis': case 'preçosapis': case 'preçoapi': case 'preçosapi': {
  //   if (!isRegistrar) return m.reply(semreg)
  anu = `
  𝗔𝗣𝗜𝗦 𝗗𝗘 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗦 🛒
  ━━━━━━━━━━━━━━━━━━
  ☬✞ CONSULTAS DISPONIVEL ✞☬
  
     🎲 CPF 
     🎲 CNPJ 
     🎲 IP
     🎲 CEP 
     🎲 SCORE 
     🎲 NOME 
     🎲 PLACA 
     🎲 TELEFONE 
     🎲 TELEFONE 1
     🎲 TELEFONE FIXO   
     ━━━━━━━━━━━━━━━━━━
  
  ━━━━━━━━━━━━━━━━━━
  PREÇOS:
  
  MENSAL: R$120
  QUINZENAL: R$60
  
  ━━━━━━━━━━━━━━━━━━
  
  REVENDEDORES OFICIAIS:`
          let messagex = await prepareWAMessageMedia({ image: fs.readFileSync('./services/media/Luar.jpg') }, { upload: client.waUploadToServer })
          const templatex = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
     hydratedTemplate: {
       imageMessage: messagex.imageMessage,
       hydratedContentText: anu,
       hydratedButtons: [{
         urlButton: {
  displayText: 'Minerd ©',
  url: 'https://api.whatsapp.com/send?phone=5511949356144&text=Olá+Minerd%2c+tenho+interesse+de+comprar+as+apis+de+consultas!'
         }
       }, {
         urlButton: {
  displayText: 'Kauã ©',
  url: 'https://api.whatsapp.com/send?phone=554491150998text=Olá+Kauã%2c+tenho+interesse+de+comprar+as+apis+de+consultas!'
         }
       },
       ]
     }
   }
          }), { userJid: m.chat, m })
          client.relayMessage(m.chat, templatex.message, { messageId: templatex.key.id })
        }
          break
     case 'basec': case 'script': case 'scriptbot': {
        //   if (!isRegistrar) return m.reply(semreg)
        anu = `━━━━━━━━━━━━━━━━━━
𝙎𝙊𝙐𝙍𝘾𝙀 𝘿𝙊 𝘽𝙊𝙏 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 🛒

VALOR:

🔘- R$100,00

━━━━━━━━━━━━━━━━━━

VENDEDORES OFICIAIS:`
        let messagex = await prepareWAMessageMedia({ image: fs.readFileSync('./services/media/arquivo.png') }, { upload: client.waUploadToServer })
        const templatex = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
            hydratedTemplate: {
              imageMessage: messagex.imageMessage,
              hydratedContentText: anu,
              hydratedButtons: [{
                urlButton: {
                  displayText: 'Minerd ©',
                  url: 'https://api.whatsapp.com/send?phone=5511949356144&text=Olá+Minerd%2c+tenho+interesse+de+comprar+as+apis+de+consultas!'
                }
              }, {
                urlButton: {
                  displayText: 'Kauã ©',
                  url: 'https://api.whatsapp.com/send?phone=5513192293714text=Olá+Kauã%2c+tenho+interesse+de+comprar+as+apis+de+consultas!'
                }
              },
              ]
            }
          }
        }), { userJid: m.chat, quoted: m })
        client.relayMessage(m.chat, templatex.message, { messageId: templatex.key.id })
      }
        break

        case 'lojadobot': case 'loja': case 'store': {
          //   if (!isRegistrar) return m.reply(semreg)
          anu = `━━━━━━━━━━━━━━━━━━
  𝐒𝐓𝐎𝐑𝐄 🛒
  
  VENDAS DISPONÍVEIS:
  
  🔘 Apis de consulta - R$120,00 (mensais)
  🔘 Source do bot de Telegram - R$100,00
  🔘 Planos individuais e para grupos
  🔘 Acesso ao bot de WhatsApp e Telegram
  
  ━━━━━━━━━━━━━━━━━━`
          let messagex = await prepareWAMessageMedia({ image: fs.readFileSync('./services/media/preços.png') }, { upload: client.waUploadToServer })
          const templatex = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
              hydratedTemplate: {
                imageMessage: messagex.imageMessage,
                hydratedContentText: anu,
                hydratedButtons: [{
                  quickReplyButton: {
                    displayText: 'Apis de Consultas 🔗',
                    id: '!apisc'
                  }
                },{
                  quickReplyButton: {
                    displayText: 'Preços 💳',
                    id: '!preços'
                  }
  
                }]
              }
            }
          }), { userJid: m.chat, quoted: m })
          client.relayMessage(m.chat, templatex.message, { messageId: templatex.key.id })
        }
          break
  
  


    case 'regras': case 'rules': case 'regra': case 'regrasgp': {
          //   if (!isRegistrar) return m.reply(semreg)
rules = `━━━━━━━━━━━━━━━━━━
𝙍𝙚𝙜𝙧𝙖𝙨 𝙙𝙤 𝙂𝙧𝙪𝙥𝙤 ❗

• Proibido qualquer tipo de divulgação e/ou venda de serviços/produtos sem ser o nosso ou sem a autorização de algum adm.

• Proibido fotos, videos, GIFs e arquivos em geral.

• Proibido flodd de comandos e mensagens.

• Proibido links em geral a não ser o do grupo em questão.

• Proibido desrespeito com os membros e adms em geral, o grupo é para TODOS!

O grupo foi feito para a divulgação dos nossos produtos e serviços e proporcionar consultas grátis. O descumprimentos das regras resultarão em seu BANIMENTO.

━━━━━━━━━━━━━━━━━━`
  buttonsExemple = []
  const buttonMessageRules = {
    image: fs.readFileSync('./services/media/rules1.png'),
      caption: rules,
      footer: '💽BOT PUXA🎲🎲🎲 By Minerd',
      buttons: null,
      headerType: 4
  };
  client.sendMessage(m.chat, buttonMessageRules, {quoted:m})
};
          break

      case 'preços': case 'plano': case 'valores': {
        //   if (!isRegistrar) return m.reply(semreg)
        anupreços = `☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗘 𝗩𝗔𝗟𝗢𝗥𝗘𝗦

━━━━━━━━━━━━━━━━━━
⚜ CONSULTAS DISPONÍVEIS

🎲 CPF 
🎲 CNPJ 
🎲 IP
🎲 CEP 
🎲 SCORE 
🎲 NOME 
🎲 PLACA 
🎲 TELEFONE 
🎲 TELEFONE 1
🎲 TELEFONE FIXO

━━━━━━━━━━━━━━━━━━
🎲 FAÇA CONSULTAS SEM LIMITE
━━━━━━━━━━━━━━━━━━
⚜ PLANOS  INDIVIDUAIS

🎲 1 Dia = R$ 7,00
🎲 7 DIAS = R$ 20,00
🎲 30 DIAS = R$ 35,00

━━━━━━━━━━━━━━━━━━
⚜ PLANOS PARA GRUPOS

🎲 15 DIAS = R$ 30,00
🎲 30 DIAS = R$ 50,00

━━━━━━━━━━━━━━━━━━
⚜ FORMAS DE PAGAMENTO
🎲 TRANSFERÊNCIA VIA PIX
━━━━━━━━━━━━━━━━━━
VENDEDORES OFICIAIS:

Minerd = http//wa.me/5511949356144
kauã = http://wa.me/554491150998
`
m.reply(anupreços)
      }
        break

      case 'getid': {
        // if (!isRegistrar) return m.reply(semreg)
        m.reply(m.chat)
      }
        break


        case 'xcpf':
              sonumero = q.replace(/[^0-9]/g, '')
             if(isNaN(sonumero)) return reply(`ERRO NO FORMATO\nExemplo: ${prefix + command} 169962734030`);
             if (sonumero.length >= 13) return reply(`Esse número tem mais de 12 dígitos, não é valído!`)
          await fetchJson(`https://app.minerdso.com.br/UTIL/api.php?consulta=${q.replace(/[^0-9]/g, '')}`)
          .then(api_de_tel => {
          api_de_tel.statuscode == 200 ? reply(` CONSULTA CPF
          
          nome : ${api_de_tel.nomeCompleto}
          cpf: ${api_de_tel.cpf}
          cns: ${api_de_tel.cns}
          data-Nascimento: ${api_de_tel.nascimento}
          nome MÃE : ${api_de_tel.nomeMae}
          
          `) : reply(`cpf não encontrado!`)
                })
          break





        case 'tel2':
          case 'fixo':
          case 'telefonefixo':{
            if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
            if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
            let user3 = global.db.data.users[m.sender]
            if (user3.consultas != -1) {
              tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
              m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
            } else {
              if (!texto) return m.reply(`💽BOT PUXA🎲🎲🎲
    ━━━━━━━━━━━━━━━━━━
    ╭──────────────
    ┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘:
    ╰──────────────

    Você precisa digitar o comando e em seguida, digitar os 10 números do telefone(Incluindo o DDD).

    𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
    ${prefixo + command} 2732661606
    ━━━━━━━━━━━━━━━━━━`)
              var query = texto
                .split('+').join('')
                .split('-').join('')
                .split(' ').join('')
                .split('(').join('')
                .split(')').join('');
              if (query.length > 10) return m.reply(`→ Número inválido ou incorreto!`)
              if (query.length < 10) return m.reply(`→ Número muito curto!`)
              console.log(`~> Consultando o número ${texto}`)
              await enviar(msg_espera)
                await sleep(500)
                await reagir(m.chat, m.key, "🕗");
                  if(!isPremium2){
                  MsgAguarde(m.sender);
                };
                MinerdTelFixo = await fetchJson(`http://o1.minerdxc.tk:8080/api?type=telefonefixo&token=${tokenvip}&query=${texto}`)
              console.log(MinerdTelFixo)
                if (MinerdTelFixo.error == undefined) {
consultaFixo =`═════════════════
    𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀 𝐓𝐄𝐋𝐄𝐅𝐎𝐍𝐄 𝐅𝐈𝐗𝐎 - 𝐓𝐞𝐥𝐝𝐛 🎲
═════════════════\n`
    for(let tel of MinerdTelFixo) {
     consultaFixo += `
• NOME: ${tel.nome}
• CPF/CNPJ: ${tel.cpf}
• NASCIMENTO: ${tel.nascimento}
• MÃE: ${tel.mae}\n
═════════════════\n`
    };
 consultaFixo += `👤 Usuário: ${pushname}\n\n🔛 BY: ${nameBot}\n═════════════════`
    consult(consultaFixo)
    console.log(consultaFixo)
              } else {
                m.reply(MinerdTelFixo.error);
                user3.consultas = -1
              }
            }
          }
            break



      case 'tel1':
      case 'telefone1': {
        if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
        if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
          tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
          m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
        } else {
          if (texto == '5515988171796') return enviar('está tentando puxar os dados do meu dono 🤨')
          if (texto == '15988171796') return enviar('está tentando puxar os dados do meu dono 🤨')
          if (texto == '15988306514') return enviar('está tentando puxar os dados do bot 🤨')
          if (texto == '5515988306514') return enviar('está tentando puxar os dados do bot 🤨');
          if (!texto) return m.reply(`💽BOT PUXA🎲🎲🎲
━━━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘:
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do telefone incluindo o 9.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo + command} 21979180533
━━━━━━━━━━━━━━━━━━`)
          var query = texto
            .split('+').join('')
            .split('-').join('')
            .split(' ').join('')
            .split('(').join('')
            .split(')').join('');
          var resultad2 = texto.replace("55", "");
          var resultad3 = resultad2.replace(/(\d{2})/, "$19")
          if (query.length >= 12) return m.reply(`→ Número inválido ou incorreto!`)
          if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━━━

O número que você digitou está inválido ou incorreto!

❌ Errado: ${resultad2}
✅️ Correto: ${resultad3}

• Use o comando novamente com o número no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo + command} ${resultad3}
━━━━━━━━━━━━━━━━━━`)
          console.log(`~> Consultando o número ${texto}`)
          await enviar(msg_espera)
            await sleep(500)
            await reagir(m.chat, m.key, "🕗");
              if(!isPremium2){
              MsgAguarde(m.sender);
            };
            Minerdtel = await fetchJson(`http://o1.minerdxc.tk:8080/api?type=telefone&token=${tokenvip}&query=${texto}`)
          console.log(Minerdtel)
            if (Minerdtel.error == undefined) {
consultaTel =`═════════════════
𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀 𝐓𝐄𝐋𝐄𝐅𝐎𝐍𝐄 🎲
═════════════════`
for(let tel of Minerdtel) {
 consultaTel += `

• TELEFONE: ${texto}
• NOME: ${tel.nome}
• CPF/CNPJ: ${tel.cpfCnpj}
• NASCIMENTO: ${tel.nascimento}
• MÃE: ${tel.mae}
═════════════════
👤 Usuário: ${pushname}

🔛 BY: ${nameBot}
═════════════════`
};
consult(consultaTel)
console.log(consultaTel)
          } else {
            m.reply(Minerdtel.error);
            user3.consultas = -1
          }
        }
      }
        break



        case 'tel':
                       if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
                        if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
                        let user4 = global.db.data.users[m.sender]
                        if (user4.consultas != -1) {
                          tempo_de_espera = clockString(new Date - user4.consultas).replace("00:00:", " ")
                          m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
                        } else {
                         if (!texto) return m.reply(`💽BOT PUXA🎲🎲🎲
                ━━━━━━━━━━━━━━━━━━
                ╭──────────────
                ┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘:
                ╰──────────────

                Você precisa digitar o comando e em seguida, digitar os 11 números do telefone incluindo o 9.

                𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
                ${prefixo + command} 11932853601
                ━━━━━━━━━━━━━━━━━━`)
                          var query = texto
                            .split('+').join('')
                            .split('-').join('')
                            .split(' ').join('')
                            .split('(').join('')
                            .split(')').join('');
                          var resultad2 = texto.replace("55", "");
                          var resultad3 = resultad2.replace(/(\d{2})/, "$19")
                          if (query.length >= 12) return m.reply(`➥ Número inválido ou incorreto!`)
                          if (query.length < 11 || query.length > 11) return m.reply(`O número deve conter 11 dígitos!`)
                          console.log(`~> Consultando o número ${texto}`)
                          await enviar(msg_espera)
                          await sleep(500)
                          await reagir(m.chat, m.key, "🕗");
                          if(!isPremium2){
                          MsgAguarde(m.sender);
                        };
                        iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/telefone3?query=${texto}&token=${tokenvip}`)
            console.log(iFenixBuscasApi)
           try {
consultaTel_LZ = `═════════════════
  𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀 𝐓𝐄𝐋𝐄𝐅𝐎𝐍𝐄 🎲
═════════════════

${iFenixBuscasApi.dados}

═════════════════
👤 Usuário: ${pushname}

🔛 BY: ${nameBot}
═════════════════`

               consult(consultaTel_LZ)
                console.log(consultaTel_LZ)
                          } catch(e) {
                            console.log(e)
                            m.reply("Nenhuma informação deste número foi encontrada");
                            user4.consultas = -1
                          }
                        }
                        break

      case 'score': {
        if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
        if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
          tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
          m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
        } else {
          var query = texto
            .split('.').join('')
            .split('-').join('')
            .split(' ').join('');
          if (!texto) return m.reply(`💽BOT PUXA🎲🎲🎲
━━━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗦𝗖𝗢𝗥𝗘:
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do cpf da vítima que você deseja consultar o score.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo + command} 00000000868
━━━━━━━━━━━━━━━━━━`)
          if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo + command} 00017500389
━━━━━━━━━━━━━━━━━━`)
await enviar(msg_espera)
await sleep(500)
await reagir(m.chat, m.key, "🕗");
if(!isPremium2){
              MsgAguarde(m.sender);
            };
          console.log(`~> Consultando o score do cpf: ${texto}...`)
          let minerdscore = await fetchJson(`http://o1.minerdxc.tk:8080/api?type=score&token=${tokenvip}&query=${texto}`)
          console.log(minerdscore)
          //addl(nmrp);
          if (minerdscore != undefined) {
            consult(`═════════════════
🅲🅾🅽🆂🆄🅻🆃🅰 🅳🅴 🆂🅲🅾🆁🅴
═════════════════
${minerdscore}
═════════════════

👤 Usuário: ${pushname}

🔛 BY: ${nameBot}
═════════════════


`)
          } else {
            m.reply(`⚠ SCORE NÃO ENCONTRADO!`);
            user3.consultas = -1
          }
        }
      }
        break

        case 'cpf':
          case 'cpf1':{
        if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
          if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
          let user3 = global.db.data.users[m.sender]
          if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
          } else {
          if(!q) return m.reply(`Insira Um Cpf!!\nExemplo: ${prefixo + command} cpfaqui`)
          if(q.length < 11 || q.lenght > 11) return m.reply(`Insira Um Cpf Valido!!\nExemplo: ${prefixo + command} cpfaqui`)
          m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
          let rm = q.replaceAll('.', '')
          rm = rm.replaceAll('-', '')
          iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/cpf?query=${rm}&token=${tokenvip}`)
          if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
          m.reply(`🎲 Consulta De CPF 1 🎲
         
                  
          🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
         
          • Cpf: ${iFenixBuscasApi.dados.cpf}
          • Situação: ${iFenixBuscasApi.dados.situaçao}
          • Cns: ${iFenixBuscasApi.dados.cns}
          • Nome: ${iFenixBuscasApi.dados.nome}
          • Idade: ${iFenixBuscasApi.dados.idade}
          • Data De Nascimento: ${iFenixBuscasApi.dados.nascimento}
          • Estado Civil: ${iFenixBuscasApi.dados.estado_civil}
          • Sexo: ${iFenixBuscasApi.dados.sexo}
          • Mãe: ${iFenixBuscasApi.dados.mãe}
          • Pai: ${iFenixBuscasApi.dados.pai}
          • Profissão: ${iFenixBuscasApi.dados.profissão}
          • Renda: ${iFenixBuscasApi.dados.renda}
          • Rg: ${iFenixBuscasApi.dados.rg}
          • Orgão Emissor: ${iFenixBuscasApi.dados.orgão_emissor}
          • Data De Emissão: ${iFenixBuscasApi.dados.data_emissão}
          • Uf: ${iFenixBuscasApi.dados.uf}
          ═════════════════
          👤 Usuário: ${pushname}

          🔛 BY: ${nameBot}
            ═════════════════
          `)
          consult(iFenixBuscasApi)
          }}
          break
         
          case 'cpf2':{
          if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
          if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
          let user3 = global.db.data.users[m.sender]
          if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
          } else {
          if(!q) return m.reply(`Insira Um Cpf!!\nExemplo: ${prefixo + command} cpfaqui`)
          if(q.length < 11 || q.lenght > 11) return m.reply(`Insira Um Cpf Valido!!\nExemplo: ${prefixo + command} cpfaqui`)
          m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
          let rm2 = q.replaceAll('.', '')
          rm2 = rm2.replaceAll('-', '')
          iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/cpf2?query=${rm2}&token=${tokenvip}`)
          if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
          m.reply(`🎲 Consulta De CPF 2 🎲
                  
          🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
          ${iFenixBuscasApi.dados}
          
          ═════════════════
          👤 Usuário: ${pushname}
  
        🔛 BY: ${nameBot}
          ═════════════════`)
          }}
          break
         
          case 'cpf3':{
          if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
          if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
          let user3 = global.db.data.users[m.sender]
          if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
          } else {
          if(!q) return m.reply(`Insira Um Cpf!!\nExemplo: ${prefixo + command} cpfaqui`)
          if(q.length < 11 || q.lenght > 11) return m.reply(`Insira Um Cpf Valido!!\nExemplo: ${prefixo + command} cpfaqui`)
          m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
          let rm3 = q.replaceAll('.', '')
          rm3 = rm3.replaceAll('-', '')
          iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/cpf3?query=${rm3}&token=${tokenvip}`)
          if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
          m.reply(`🎲 Consulta De CPF 3 🎲
                  
          🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
          ${iFenixBuscasApi.dados}
          
          ═════════════════
          👤 Usuário: ${pushname}
  
        🔛 BY: ${nameBot}
          ═════════════════`)}}
          break
         
          case 'cpf4':{
          if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
          if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
          let user3 = global.db.data.users[m.sender]
          if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
          } else {
          if(!q) return m.reply(`Insira Um Cpf!!\nExemplo: ${prefixo + command} cpfaqui`)
          if(q.length < 11 || q.lenght > 11) return m.reply(`Insira Um Cpf Valido!!\nExemplo: ${prefixo + command} cpfaqui`)
          m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
          let rm4 = q.replaceAll('.', '')
          rm4 = rm4.replaceAll('-', '')
          iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/cpf4?query=${rm4}&token=${tokenvip}`)
          if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
          m.reply(`🎲 Consulta De CPF 4 🎲
                  
          🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
          ${iFenixBuscasApi.dados}
          
             ═════════════════
        👤 Usuário: ${pushname}

      🔛 BY: ${nameBot}
        ═════════════════`)}}
          break
         
          case 'cpf5':{
          if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
          if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
          let user3 = global.db.data.users[m.sender]
          if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
          } else {
          if(!q) return m.reply(`Insira Um Cpf!!\nExemplo: ${prefixo + command} cpfaqui`)
          if(q.length < 11 || q.lenght > 11) return m.reply(`Insira Um Cpf Valido!!\nExemplo: ${prefixo + command} cpfaqui`)
          m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
          let rm5 = q.replaceAll('.', '')
          rm5 = rm5.replaceAll('-', '')
          iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/cpf5?query=${rm5}&token=${tokenvip}`)
          if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
          m.reply(`🎲 Consulta De CPF 5 🎲
         
                   🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
          ${iFenixBuscasApi.dados} 
          ═════════════════

           👤 Usuário: ${pushname}

          🔛 BY: ${nameBot}

           ═════════════════
          
          
          `)}}
          break
         
   
          case 'nome':{
            if(consultaOFF === true) return m.reply("Consultas desligadas temporarimente...")
            if (m.isGroup && !isPremiumGp) return noprem(`Este grupo não adiquiriu o acesso premium!`)
            let user3 = global.db.data.users[m.sender]
            if (user3.consultas != -1) {
              tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
              m.reply(`Oops...\nVocê consultou recentemente, aguarde 5 minutos para consultar novamente!\n\n→ Tempo já passado: ${tempo_de_espera} ⌛`)
            } else {
            if(!q) return m.reply(`Insira Um Nome!!\nExemplo: ${prefixo + command} nomeaqui`)
            m.reply("💽 Buscando os 🎲🎲🎲🎲... ⚡️")
            q2 = q.toLowerCase();
            iFenixBuscasApi = await fetchJson(`https://ifenix.tk/api/nome?query=${q2}&token=batmonn`)
            if (!iFenixBuscasApi?.dados) return m.reply('⛔ Não encontrado!!')
            m.reply(`🎲 Consulta De Nome 🎲
               
            🔗 ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ⤵️
            ${iFenixBuscasApi.dados}
            
            ═════════════════
            👤 Usuário: ${pushname}
    
            🔛 BY: ${nameBot}
            ═════════════════`)}}
            break
           



        



      case 'idget': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!texto) return m.reply('➥ Mande um link de grupo!')
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('➥ Link inválido!')

        let result = args[0].split('https://chat.whatsapp.com/')[1]
        await client.groupAcceptInvite(result).then(res2 => {
          var geitdd = res2.replace(`""`, ``);
          m.reply(geitdd)
        })
      }
        break

      case 'comunicado': {
        if (!isDono) return m.reply(msg.dono)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!texto) return m.reply(`➥ Digite a mensagem que deseja comunicar!`)
        await comunicado(m.chat, texto)
        m.reply(`➥ Comunicado enviando para ${participants.length} membros!`)
      }
        break

      case 'delete': case 'del': case 'd': case 'apagar': {
        await sleep(100)
        let { chat, fromMe, id, isBaileys } = m.quoted
        client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
      }
        break

      case 'deletec': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.quoted) return m.reply('➥ Mencione uma mensagem do bot para ser deletada!')
        client.sendMessage(m.chat, { delete: m.quoted.id })
        await sleep(500)
        m.reply(`➥ Mensagem deletada com sucesso!`)
      }
        break

      case 'hidetag': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(semadm)
        client.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break

      case 'kick': case 'ban': case 'banir': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins && !isDono) return m.reply(semadm)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users === "5515988171796@s.whatsapp.net") return m.reply(`Eu não posso remover meu dono`)
        if (users === "5515988306514@s.whatsapp.net") return m.reply(`Eu não posso me auto-remover`)
        if (users === mek.key.fromMe) return m.reply(`Eu não posso remover eu mesmo`)
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`➥ Membro removido com sucesso!️`)).catch((err) => m.reply(`➥ Erro ao remover o membro @${users.split('@')[0]}`))
      }
        break;


        case 'gbot':

        temp = `GRUPOS OFICIAIS 
        ━━━━━━━━━━━━━━━━━━
        • 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 => https://chat.whatsapp.com/KG7nQ5JqgJ09x4rKtATgEM
        
        • 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢 => https://t.me/minerdgrupo
            
        ━━━━━━━━━━━━━━━━━━`
        client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/TKDa9JB.jpg' }, contextInfo: { mentionedJid: [sender] }, caption: temp})
        break

      case 'block': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!isDono) return m.reply(msg.dono)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.updateBlockStatus(users, 'block').then((res) => m.reply(`➥ Usuário @${users.split('@')[0]} bloqueado com sucesso !️`)).catch((err) => m.reply(`➥ Erro ao bloquear o usuário @${users.split('@')[0]}!`))
      }
        break
      case 'desbloquear': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!isDono) return m.reply(msg.dono)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@'
        await client.updateBlockStatus(users, 'unblock').then((res) => m.reply(`➥ Usuário desbloqueado com sucesso!`)).catch((err) => m.reply(`➥ Erro ao desbloquear o usuário!`))
      }
        break

      case 'resetarlink': case 'revogar': {
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        if (!isAdmins) return m.reply(msg.admin)
        try {
          await client.groupRevokeInvite(m.chat)
          m.reply(`➥ Link do grupo resetado com sucesso!`)
        } catch (e) {
          console.log(e)
          m.reply(`➥ Erro ao resetar o link do grupo!`)
        }
      }
        break

      case 'linkgp': case 'linkgc': {
        if (!m.isGroup) return m.reply(msg.grupo)
        if (!isBotAdmins) return m.reply(msg.botAdmin)
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })
      }
        break


      case 'entrar': {
        // if (!isRegistrar) return m.reply(semreg)
        if (!isDono) return m.reply(msg.dono)
        if (!texto) return m.reply(`➥ Mande um link do grupo!`)
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(`➥ Link inválido`)
        m.reply(msg.aguarde)
        let result = args[0].split('https://chat.whatsapp.com/')[1]
        await client.groupAcceptInvite(result).then((res) => m.reply(`➥ Pronto ✔️`)).catch((err) => m.reply(`➥ Erro ❌`))
      }
        break



      case 'copiar': {
        client.sendMessage(m.sender, { text: `${texto}` })
        await sleep(50)
        m.reply(`• Consulta enviada em texto no seu privado!`)
      }
        break;

      case 'copiartk': {
        client.sendMessage(m.chat, { text: `${texto}` })
      }
        break

      //INICIO DOS COMANDOS
      case 'afk': {
        if (!isDono) return enviar(msg.dono)
        let user = global.db.data.users[m.sender]
        user.afkTime = + new Date
        user.afkReason = texto
        m.reply(`${m.pushName} Esta afk (offline) ${texto ? ': ' + texto : ''}`)
      }
        break


      default:
        if (budy.startsWith('=>')) {
          if (!isDono) return m.reply(msg.dono)
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return m.reply(bang)
          }
          try {
            m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            m.reply(String(e))
          }
        }

        if (budy.startsWith('>')) {
          if (!isDono) return m.reply(msg.dono)
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await m.reply(evaled)
          } catch (err) {
            await m.reply(String(err))
          }
        }

        if (budy.startsWith('$')) {
          if (!isDono) return m.reply(msg.dono)
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err)
            if (stdout) return m.reply(stdout)
          })
        }

        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
          this.anonymous = this.anonymous ? this.anonymous : {}
          let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
          if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return
            if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
            let other = [room.a, room.b].find(user => user !== m.sender)
            m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
              contextInfo: {
                ...m.msg.contextInfo,
                forwardingScore: 0,
                isForwarded: true,
                participant: other
              }
            } : {})
          }
          return !0
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith('broadcast')) return
          if (m.isBaileys) return
          let msgs = global.db.data.database
          if (!(budy.toLowerCase() in msgs)) return
          client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
    }


  } catch (err) {
    console.log(util.format(err))
  }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
