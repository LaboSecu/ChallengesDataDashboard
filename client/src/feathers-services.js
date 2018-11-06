const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client')

const socket = io('/')
const app = feathers()

// Set up Socket.io client with the socket
app.configure(socketio(socket))

// Receive real-time events through Socket.io
export const challengesService = app.service('challenges')