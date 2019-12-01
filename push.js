var push = require('web-push');
//let keys = push.generateVAPIDKeys();
//console.log(keys)
let keys = {
    publicKey: 'BKLnudv7hfDZFeic8p0SOwabzE-0eo5Fq4o6YePetJ6uwXmeKhU_rQ6xHGnA-9dlYP3meVc8roirCXCMPDhx_wo',
    privateKey: '1rwDvC6N6GKvMvHmClauhZcDf5kKN_OXNUACdaHLDwE'
}

push.setVapidDetails('mailto:naveen@krify.net', keys.publicKey, keys.privateKey)
let sub = {}

push.sendNotification(sub, 'test message')