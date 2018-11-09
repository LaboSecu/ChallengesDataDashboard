const express = require('express')
const path = require('path')

module.exports = function (app) {
	if(process.env.NODE_ENV === 'production')
	{
		app.use(express.static(path.join(__dirname, '../../../client/dist')))
		app.get('*', function(req, res, next){
			res.sendFile(path.join(__dirname, '../../../client/dist/index.html'))
		})
	}
}
