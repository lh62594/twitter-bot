function tweetNow(tweetTxt) {
  var tweet = {
    status: tweetTxt
  }
};

var n = tweetTxt.search(/@GitBread/i);

if (n != -1) {
  console.log("Tweet self! Skipped!");
} else {
  Twitter.post('statuses/update', tweet, function (err, data, response) {
    if (err) {
      console.log("cannot reply to follower. Error:" + err);
    } else {
      console.log("reply, success!");
    }
  })
}
