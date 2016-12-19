const Twitter = require('twitter');
const config = require('./config.json');

const client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
});

client.post('statuses/update',
    {status: 'First Tweet! Yeah! Cmon!\nHello, fellas!'},
    function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
});
