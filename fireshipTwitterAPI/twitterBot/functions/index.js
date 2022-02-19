const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const dbRef= admin.firestore().doc('tokens/demo');
const TwitterApi = require('twitter-api-v2').default;
const twitterClient = new TwitterApi({
	clientId:'',
	clientSecret:''
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.auth = functions.https.onRequest((request,response)=>{});
exports.callback = functions.https.onRequest((request,response)=>{});
exports.tweet = functions.https.onRequest((request,response)=>{});
