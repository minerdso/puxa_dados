const { usuario } = require('./model');
const toMs = require('ms');
const { limitCount, limitPremium, tokens } = require('../config');
module.exports.tokens = tokens

    async function addPremium(username, customKey, expired) {
        usuario.updateOne({nome: username}, {apikey: customKey, premium: Date.now() + toMs(expired), limit: limitPremium}, function (err, res) {
            if (err) throw err;
        })
    }

    async function addMod(username, customKey, expired, users) {
        usuario.updateOne({nome: username + "moder"}, {apikey: customKey, premium: Date.now() + toMs(expired), limit: users}, function (err, res) {
            if (err) throw err;
        })
    }


    async function ExpiredTime() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { premium, defaultKey, username } = data
            if (!premium || premium === null) return
            if (Date.now() >= premium) {
                usuario.updateOne({nome: username}, {apikey: defaultKey, premium: null, limit: limitCount}, function (err, res) {
                    if (err) throw err;
                    console.log(`O Premium de ${username} acabou`)
                })
            }
        })
    }
    async function deletePremium(username) {
        let users = await usuario.findOne({nome: username});
        let key = users.defaultKey
        usuario.updateOne({nome: username}, {apikey: key, premium: null, limit: limitCount}, function (err, res) {
            if (err) throw err;
        })
    }
    async function checkPremium(username) {
        let users = await usuario.findOne({nome: username});
        if (users.premium === null) {
            return false;
        } else {
            return true;
        };
    };
    async function changeKey(username, key) {
        usuario.updateOne({nome: username}, {apikey: key}, function (err, res) {
            if (err) throw err;
        });
    }
    async function resetOneLimit(username) {
        let users = await usuario.findOne({nome: username});
        if (users !== null) {
            usuario.updateOne({nome: username}, {limit: limitCount}, function (err, res) {
                if (err) throw err;
            });
        }
    }


//NÃO MEXA AQUI
module.exports.addPremium = addPremium;
module.exports.addMod = addMod;
module.exports.ExpiredTime = ExpiredTime;
module.exports.deletePremium = deletePremium;
module.exports.checkPremium = checkPremium;
module.exports.changeKey = changeKey;
module.exports.resetOneLimit = resetOneLimit;
