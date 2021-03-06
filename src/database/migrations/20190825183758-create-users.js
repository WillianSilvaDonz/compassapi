'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_company:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            password_hash:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};
