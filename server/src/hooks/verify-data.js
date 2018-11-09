const moment = require('moment')

const ynovRegex = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@ynov.com$/

module.exports = function (options = {}) {
	return async context => {
		const {email, challengePassed} = context.data
		if (ynovRegex.test(email) === false) {
			throw new Error('The email doesn\'t match the requirements')
		}
		else if (typeof challengePassed !== 'boolean') throw new Error('The status is invalid')

		context.data.date = moment().format('Do MMMM YYYY, h:mm:ss a')

		return context
	}
}
