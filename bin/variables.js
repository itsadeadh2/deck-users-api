module.exports = {
  port: process.env.APP_PORT,
  DB_CONNECTION: process.env.USERS_DATABASE || 'mongodb://localhost/users',
}