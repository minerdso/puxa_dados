
const fs = require('fs')
const chalk = require('chalk')

global.owner =   ['5511949356144',`554491150998`]
global.revendedores =  ['5511949356144',`554491150998`]
global.premium =  ['5511949356144',`554491150998`]
global.packname = '💽BOT PUXA🎲🎲🎲'
global.author = 'NINGUEM'
global.sessionName = 'Conexao'
global.prefa = ["!"]
global.sp = '⭔'
global.msg = {
    sucesso: '➥ Comando executado com sucesso!',
    admin: '➥ Apenas Admins pode usar esse comando!',
    botAdmin: '➥ Eu preciso ser admin para executar esse comando!',
    dono: '➥ Apenas meu dono pode utilizar esse comando!',
    grupo: '➥ Recurso só pode ser usado em grupos!',
    privado: '➥ Recurso só pode ser usado no privado do bot!',
    bot: '➥ Recurso especias do usuário do número do bot!',
    aguarde: '➥ Aguarde alguns segundos!',
    limitemsg: '➥ Seu limite diário acabou, o limite será redefinindo a cada 12 horas!'
}

global.limitawal = {
    premium: "Infinito",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = {
    port: '5000',
    apikeypremium: 'flayvipprivx',
    limitCount: 0,
    dinheiroCount: 10,
    limitPremium: 900,
    tokens: 'adms_ofcs',
    dbURI: 'sem mongo db' 
};
