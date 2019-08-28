const { user } = require('../models');

class UserController{
    async index(req, res){
        const users = await user.findAll({ include: 'empresa' });
        
        if(users){
            return res.status(200).json(users);
        }else{
            return res.status(401).json({ message: "Not find users"});
        }
    }

    async store(req, res){
        const {body} = req;
        if(body){
            try {
                const { email } = body;
                const dados = await user.findOne({ where:{email: email} });
                if(dados){
                    return res.status(400).send({ message: "E-mail já existe na nossa base de dados." });
                }

                const response = await user.create(body);
                
                response.password_hash = undefined;

                return res.status(200).json(response);    
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
            
        }else{
            return res.status(400).json({ message: "Not send body empty" });
        }
    }

    async delete(req, res){
        return res.status(200).send({status: 'ok'});
    }
}

module.exports = new UserController();