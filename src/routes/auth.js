const express = require('express')
const { login, register, logout, refreshToken } = require('../controllers/auth')
const route = express.Router()

route
    .post('/login', login)
    .post('/register', register)
    .get('/logout', logout)
    .post('/refresh-token', refreshToken)


module.exports = route