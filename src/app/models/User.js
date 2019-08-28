const bcryptjs = require('bcryptjs');

module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define("user",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Nome é obrigatório."
                },
                notEmpty:{
                    msg: "Nome é obrigatório"
                },
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notNull:{
                    msg: "Email é obrigatório."
                },
                isEmail: {
                    msg: "Email tem que ser valido"
                },
                notEmpty: {
                    msg: "Email é obrigatório"
                }
            }
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Empresa é obrigatório."
                },
                isInt:{
                    msg: "Valor tem que ser do tipo Inteiro"
                }
            }
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
                notEmpty: {
                    msg: "Senha é obrigatório"
                },
            },
        },
        enabled: { 
            type: DataTypes.BOOLEAN
        }
    },{freezeTableName: true});

    user.associate = function(models) {
        user.belongsTo(models.company, {foreignKey: 'id_company', as: 'empresa'});
    };

    user.prototype.toJSON =  function () {
        var values = Object.assign({}, this.get());
        
        delete values.password_hash;
        return values;
    }

    user.addHook('beforeCreate', async function (user, options, fn) {
        const hash = await bcryptjs.hash(user.password_hash, 10).then(hashnew=>{
            return hashnew;
        });
        user.password_hash = hash;
    });

    return user;
}