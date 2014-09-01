//http://passportjs.org/guide/oauth2-api/

var passport = require('passport'),
    FitBitStrategy = require('passport-fitbit').Strategy;

var APP_ID = 'c5765ab681034ec2a9e3e6f4f4440c1d',
    APP_SECRET = '299e3c0450ed4a088edd93790549cba4';


passport.use(new FitBitStrategy({
    consumerKey: APP_ID,
    consumerSecret: APP_SECRET,
    callbackURL: "http://127.0.0.1:1337/auth/fitbit/callback"
  },
  function(accessToken, secretToken, profile, done) {
        process.nextTick(function () {
          
            User.findOne({userId:profile.id})
            .then(function(foundUser){
              if(foundUser) {
                console.log("Found!!");
                console.log(foundUser);
                foundUser.accessToken = accessToken;
                foundUser.secretToken = secretToken;
                User.update({userId:foundUser.userId}, foundUser)
                .exec(function(err, user) {
                  if (err) {
                    console.log("There was an error");
                  } else {
                    console.log("The user was updated");
                    console.log(user);
                  }
                });
              } else {
                console.log("Not Found :(");
                var n = User.create({
                  userId: profile.id,
                  accessToken: accessToken,
                  secretToken: secretToken,
                  name: profile._json.user.displayName,
                  avatar: profile._json.user.avatar,
                  gender: profile._json.user.gender,
                  country: profile._json.user.country,
                  height: profile._json.user.height,
                  weight: profile._json.user.weight,
                  heightUnit: profile._json.user.heightUnit,
                  weightUnit: profile._json.user.weightUnit
                }).exec(function (err, user) {
                  if (err) {
                    console.log("it errored");
                  } else {
                    console.log("it passed!");
                    console.log(user);
                  }
                });
              }
            }).then(function(user) {
                return done(null, { 
                    userId: profile.id
                });
            }).fail(function(err){
                console.error(err);
                res.send(500,err);
            }); 
        });
    }
));
