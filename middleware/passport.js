const keys = require('../config/keys')
const User = require('../models/user/user')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : keys.jwt
}

module.exports = passport => {
    try {
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            console.log('Passport process')

            const user = await User.findById(jwt_payload.userId)

            if (user) {
                done(null, user)
            }

            else {
                done(null, false)
            }
        }));
    }
    catch (err) {
        console.log(err)
    }
}

