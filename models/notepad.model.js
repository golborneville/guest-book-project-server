'use strict'

module.exports = (sequelize, DataTypes) => {
    const NotePad = sequelize.define('NotePad', {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        noteWrite: {
            allowNull: false,
            type: DataTypes.STRING
        },
        writer: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, {
        tableName: 'notepads',
        timestamps: true
    });

    return NotePad;
};