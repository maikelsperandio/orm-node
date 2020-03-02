const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res){

        const users = await User.findAll({
            attributes: ['name', 'email'],
            include: [
                {
                    association: 'addresses',
                    attributes: ['zipcode', 'street', 'number', 'city'],
                    where: {
                        city: {
                            [Op.like]: '%Goiania%'
                        }
                    }
                },
                {
                    association: 'techs',
                    attributes: ['name'],
                    required: false,
                    where: {
                        name: {
                            [Op.like]: '%React%'
                        }
                    }
                }
            ]
        });

        return res.json(users)
    }
};