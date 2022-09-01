// models/user.js
'use strict';
const { Model } = require('sequelize');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async register({ username, password }) {
      if (!username || !password) {
        return Promise.reject({
          message: 'Data invalid',
          code: 'auth/register-invalid',
        });
      }

      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await this.create({
          username,
          password: encryptedPassword,
        });
        return Promise.resolve(user);
      } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          return Promise.reject({
            message: 'User already exists',
            code: 'auth/user-exists',
          });
        }

        return Promise.reject(error);
      }
    }

    static async authenticate({ username, password }) {
      try {
        const user = await this.findOne({ where: { username } });
        if (!user) {
          return Promise.reject({
            message: 'User not found!',
            code: 'auth/user-not-found',
          });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return Promise.reject({
            message: 'Wrong password',
            code: 'auth/wrong-password',
          });
        }

        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    generateToken() {
      const payload = {
        id: this.id,
        username: this.username,
      };
      const secret = process.env.APP_SECRET;
      if (!secret) throw new Error('Please set APP_SECRET on env');
      const token = jwt.sign(payload, secret);
      return token;
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
