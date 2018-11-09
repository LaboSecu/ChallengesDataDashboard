import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'

const socket = io('/')
const app = feathers()

// Set up Socket.io client with the socket
app.configure(socketio(socket))
app.configure(auth({
	cookie: 'access-token', // the name of the cookie to parse the JWT from when cookies are enabled server side
	storageKey: 'access-token', // the key to store the accessToken in localstorage or AsyncStorage on React Native
	storage: new CookieStorage() // Passing a WebStorage-compatible object to enable automatic storage on the client.
}
))

export const client = app
export const challengesService = app.service('challenges')