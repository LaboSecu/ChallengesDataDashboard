const authentication = require('@feathersjs/authentication')
const jwt = require('@feathersjs/authentication-jwt')
const local = require('@feathersjs/authentication-local')


module.exports = function (app) {
	const config = {
		path: '/authentication', // the authentication service path
		header: 'Authorization', // the header to use when using JWT auth
		entity: 'user', // the entity that will be added to the request, socket, and context.params. (ie. req.user, socket.user, context.params.user)
		secret: 'supersecret', // either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA.
		service: 'users', // the service to look up the entity
		passReqToCallback: true, // whether the request object should be passed to the strategies `verify` function
		session: false, // whether to use sessions
		cookie: {
			enabled: true, // whether cookie creation is enabled
			name: 'access-token', // the cookie name
			httpOnly: false, // when enabled, prevents the client from reading the cookie.
			secure: true // whether cookies should only be available over HTTPS
		},
		jwt: {
			header: { typ: 'access' }, // by default is an access token but can be any type. This is not a typo!
			audience: '/', // The resource server where the token is processed
			subject: 'request token', // Typically the entity id associated with the JWT
			issuer: 'feathers', // The issuing server, application or resource
			algorithm: 'HS256', // the algorithm to use
			expiresIn: '1d' // the access token expiry
		},
		strategies: app.get( 'authentication' )
	}
	// Set up authentication with the secret
	app.configure(authentication(config))
	app.configure(jwt())
	app.configure(local())

	// The `authentication` service is used to create a JWT.
	// The before `create` hook registers strategies that can be used
	// to create a new valid JWT (e.g. local or oauth2)
	app.service('authentication').hooks({
		before: {
			create: [
				authentication.hooks.authenticate(config.strategies)
			],
			remove: [
				authentication.hooks.authenticate('jwt')
			]
		}
	})
}
