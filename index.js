//index.js
var TwitterPackage = require('twitter');
var request = require('request');

console.log("Hello World! I am a twitter bot!");

var secret = {
  consumer_key: 'lRJwC6k2jsnXi8QJ5HiVUvCbn',
  consumer_secret: 'Oa8IhXSByjPLioA5GHoJQ81jvBchjv2Iftul4t8A2yL3yLdkn2',
  access_token_key: '347291205-LxzwmjaJ75Utzauk8gB6UykomqqVMvaVqOxonyyi ',
  access_token_secret: 'nkmWLuTAnzPOjDf38RkXRCQNXcaxnCA3MrTVuzK84LADg'
}

var Twitter = new TwitterPackage(secret);


//Twitter stream
var hashtag = '#gameOfThrones'; //put any hashtag to listen e.g. #brexit
console.log('Listening to:' + hashtag);

Twitter.stream('statuses/filter', {track: hashtag}, function(stream) {
stream.on('data', function(tweet) {
console.log('Tweet:@' + tweet.user.screen_name +
'\t' + tweet.text);
console.log('------')
});

stream.on('error', function(error) {
console.log(error);
});
});
