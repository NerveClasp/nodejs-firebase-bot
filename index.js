const Twitter = require('twitter');
const config = require('./config.json');
const admin = require("firebase-admin");

const client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
});

admin.initializeApp({
  credential: admin.credential.cert(config.admin),
  databaseURL: "https://nodejs-firebase-bot.firebaseio.com"
});
const db = admin.database();
const ref = db.ref("/added");
let firstEntry = {
  text: "Second Tweet! How you doin'?)\nGoing Good! Recording our second video",
  id: 0,
  id_str: ""
};
// ref.push(firstEntry);
ref.on("value", function(snapshot) {
  let val = snapshot.val();
  let key = "-KZMAotA5O3MLkGbbNJj";
  // console.log(val);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

ref.child("-KZMAotA5O3MLkGbbNJj").on('value', function (snap) {
  let val = snap.val();
  postTweet(val.text);
  // console.log(val.text);
});

let postTweet = function(text){
  client.post('statuses/update',
      {status: text},
      function(error, tweet, response) {
    if(error) throw error;
    console.log("Tweeted!", text);
    console.log(tweet);  // Tweet body.
    // console.log(response);  // Raw response object.
  });
}
