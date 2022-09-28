const router = require('express').Router();
const sequelize = require('../config/connectio');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

