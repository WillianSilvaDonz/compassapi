module.exports = (sequelize, DataTypes) =>{
    const company = sequelize.define("company",{
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
        description: DataTypes.STRING,
        id_owner:{
            type: DataTypes.INTEGER,
        }
    },{freezeTableName: true});

    company.associate = function(models) {
        company.belongsTo(models.user, {foreignKey: 'id_owner', as: 'owner'});
        company.hasMany(models.user, {foreignKey: 'id_company', as:'funcionarios' });
    };

    company.prototype.toJSON =  function () {
        var values = Object.assign({}, this.get());
        
        delete values.password_hash;
        return values;
    }

    return company;
}