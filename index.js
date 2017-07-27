const Twitter = require('twitter');
const config = require('./config.json');
const admin = require("firebase-admin");
const db = admin.database();
const ref = db.ref("/added");

let tweets = [
  { text: "Third tweet! This time almost automatic", valid: false },
  { text: "Fourth tweet. Because why not", valid: false },
  { text: "Fifth tweet. Someone, please stop me :)", valid: false }];

ref.on("child_changed", function(snap) {
  var tweet = snap.val();
  if (tweet.valid) postTweet(tweet.text, snap.key);
});

let postTweet = function(text, key){
  client.post('statuses/update', {status: text}, function(error, tweet, response) {
    if(error) throw error;
    let details = { id: tweet.id, id_str: tweet.id_str, tweeted: true,
      user: {
        usr_id: tweet.user.id, usr_id_str: tweet.user.id_str,
        usr_name: tweet.user.name, usr_screen_name: "@"+tweet.user.screen_name
      }
    }
    ref.child(key).update(details);
    console.log("Tweeted!", text);
    console.log(tweet);  // Tweet body.
    // console.log(response);  // Raw response object.
  });
}

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
/*
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
*/
// ref.push(firstEntry);
// for (var i = 0; i < tweets.length; i++) {
//   ref.push(tweets[i]);
// }
