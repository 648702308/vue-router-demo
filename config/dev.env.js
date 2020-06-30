'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TITLE:'"小升初"',
  API_ROOT:'"http://192.168.1.134:39019"'//本地请求前缀
})
