var push = require('web-push');
//let keys = push.generateVAPIDKeys();
//console.log(keys)
let keys = {
    publicKey: 'BKLnudv7hfDZFeic8p0SOwabzE-0eo5Fq4o6YePetJ6uwXmeKhU_rQ6xHGnA-9dlYP3meVc8roirCXCMPDhx_wo',
    privateKey: '1rwDvC6N6GKvMvHmClauhZcDf5kKN_OXNUACdaHLDwE'
}

push.setVapidDetails('mailto:naveen@krify.net', keys.publicKey, keys.privateKey)
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dMMSEwJNDZw:APA91bGJfGuRMmsXuCt21P7Zl7iQFfO0daixvojf1Dw7XmeqgMF0mnA5uahEG1-mt8dEy21kWdi2uog2XSTjcvnIRHk8JvjM4Fw9b-Y-O2vEPMNX55VkZCwFuDYKS0krpaKIgOcmSJL2", "expirationTime": null, "keys": { "p256dh": "BCcM4jg64Ffy10LcNvy63jsdLAXb86IvK0V2WcGbqjeKhkHFtTGHJSSRFqmAaXFPqGMlZXZNVqrf03yUark_hQo", "auth": "TTLfOHTzQ9EfVl3AiGzVtA" } }

push.sendNotification(sub, 'test message')