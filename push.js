var push = require('web-push');
//let keys = push.generateVAPIDKeys();
//console.log(keys)
let keys = {
    publicKey: 'BKLnudv7hfDZFeic8p0SOwabzE-0eo5Fq4o6YePetJ6uwXmeKhU_rQ6xHGnA-9dlYP3meVc8roirCXCMPDhx_wo',
    privateKey: '1rwDvC6N6GKvMvHmClauhZcDf5kKN_OXNUACdaHLDwE'
}

push.setVapidDetails('mailto:naveen@krify.net', keys.publicKey, keys.privateKey)
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dk6ubvOeM-U:APA91bFjcj9a-z-8AKQCaPyME2mmGp3_W0BN3dwi_j2b6Xs0F5JHmrRrrOkNUAdQh2ANFYbEXjWubHjR5wpgn0vzgtfE1Qxv9yM6oeiQB4Xx2TrwLAg5uh6F72F4DrAFMMtkSE-013-r", "expirationTime": null, "keys": { "p256dh": "BC7YyXw9m_kiCWNJ8ekyknoYqjKwwxBrJz7jeLXFcBWdVoqyWeiV5mRT2D7mghvvL4JHamJwLjgFK9GFaSPeSFs", "auth": "Xo8UD7mKFeYxXWJIM2TKhA" } }


push.sendNotification(sub, 'test message')