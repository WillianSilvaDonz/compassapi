'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('user', ['id_company'], {
            type: 'foreign key',
            name: 'custom_fkey_constraint_idcompany',
            references: {
                table: 'company',
                field: 'id'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('user', 'custom_fkey_constraint_idcompany');
    }
};
