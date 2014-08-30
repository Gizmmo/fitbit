var passport = require('passport');

module.exports = {
    express: {

        customMiddleware: function(app) {
            //Initialize Passport Middleware
            app.use(passport.initialize());
            app.use(passport.session());
        },

        middleware: {
            custom: true
        },

        bodyParser: function(options) {

            // Get default body parser from Express
            var BasicBodyParser = require('body-parser')(options),

            // Get function for consumung raw body, yum.
                RawBodyParser = require('raw-body'),

                MultiPartBodyParser = require('multer')({dest: './uploads/'});

            return function(req, res, next) {
                var type = req.headers['content-type'];

                if (type && (type.match('.*json.*') || type.match('.*x-www-form-urlencoded.*'))) {
                    return BasicBodyParser(req, res, next);
                }
                else if (type &&(type.match('.*multipart.*'))){
                    MultiPartBodyParser(req,res,next)
                }
                else{
                    // flag as parsed
                    req._body = true;

                    // parse
                    RawBodyParser(req, {
                        limit: 100000, // something reasonable here
                        expected: req.headers['content-length']
                    }, function(err, buf) {
                        if (err) return next(err);

                        // Make string from buffer
                        buf = buf.toString('utf8').trim();

                        // Set body
                        req.body = buf.length ? {content:buf} : {};

                        // Continue
                        next();
                    });
                }


            };
        }
    }
};