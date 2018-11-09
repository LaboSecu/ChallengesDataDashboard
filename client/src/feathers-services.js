const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const auth = require('@feathersjs/authentication-client')
const io = require('socket.io-client')

const socket = io('http://localhost:3030/')
const app = feathers()

// Set up Socket.io client with the socket
app.configure(socketio(socket))
app.configure(auth({
	storage: window.localStorage
}))

export const client = app
export const challengesService = app.service('challenges')