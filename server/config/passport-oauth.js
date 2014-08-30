//http://passportjs.org/guide/oauth2-api/

var passport = require('passport'),
    FitBitStrategy = require('passport-fitbit').Strategy;

// This is being set up in a personal account for Shawn Bernard.
// CTi Account will need to be set up on live

var APP_ID = 'c5765ab681034ec2a9e3e6f4f4440c1d',
    APP_SECRET = '299e3c0450ed4a088edd93790549cba4';



passport.use(new FitBitStrategy({
    consumerKey: APP_ID,
    consumerSecret: APP_SECRET,
    callbackURL: "http://127.0.0.1:1337/auth/callback"
  },
  function(accessToken, secretToken, profile, done) {
        console.lod('ding');
        process.nextTick(function () {
          console.log(profile)
           
        });
    }
));
