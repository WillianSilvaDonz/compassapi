const { company } = require('../models');

class CompanyController{
    async index(req, res){
        const dadosCompany = await company.findOne({ where:{ id: req.userId }, include: ['owner', 'funcionarios']});
        dadosCompany.owner.password_hash = undefined;
        res.status(200).send(dadosCompany);
    }

    async store(req, res){
        const {body} = req;
        if(body){
            try {
                const response = await company.create(body);

                return res.status(200).json(response);    
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
            
        }else{
            return res.status(400).json({ message: "Not send body empty" });
        }
    }
}

module.exports = new CompanyController();