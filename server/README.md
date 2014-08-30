# api-server

a [Sails](http://sailsjs.org) API 


Using Sails Beta!

##Merging into a Vanilla Sails

For all the functionality of sails auth generator to work, sails.js ~0.10.0-r7 is needed at a minimum.

Here is a list of files you will need to import over
- api/controllers/OAuthClientsController.js (for initial setup purposes)
- api/controllers/OAuthUsersController.js (for initial setup purposes)
- api/models/OAuthAccessTokens.js
- api/models/OAuthUsers.js
- api/policies/oauth.js
- config/passport-oauth.js
- config/express.js
- config/connections.js

Here is a list of files you may need to check the configuration of
- package.json, include these additional dependencies
    - “bcrypt-nodejs": "0.0.3",
    - “body-parser": "^1.3.0",
    - “multer": "^0.1.0",
    - “passport": "^0.2.0",
    - “passport-http-bearer": "^1.0.1",
    - “raw-body": "^1.1.6",
    - “sails-mongo": "^0.10.0-rc5"
- config/cors.js
    - change `allRoutes` value to `true`
    - change `headers` value to `content-type, authentication`
- config/policies.js
    - change `’*’: true` to `’*’: ‘oauth’`
- config/models.js
    - change `connection: ‘localDiskDb’` to `connection: ‘myapp’`
- config/connections.js
    - change connection points to suit
