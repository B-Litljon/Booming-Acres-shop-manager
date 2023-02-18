const Sequelize = require('Sequelize');
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
  });
  
const AuthToken = sequelize.define('AuthToken', {
  token: {
    type: DataTypes.string,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = AuthToken;