'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('company',{
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            description:{
                type: Sequelize.STRING
            },
            id_owner:{
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at:{
                type: Sequelize.DATE,
                allowNull: false,
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('company');
    }
};
