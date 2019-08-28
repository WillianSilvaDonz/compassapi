const {user} = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

class AuthController{

    async authenticate(req, res){
        const { email, password } = req.body;

        if(email && password){
            try {
                const userDados = await user.findOne({ where:{email: email} });
                if(!userDados)
                    return res.status(400).json({ message: "Nenhum usuario com esse e-mail" });
                
                
                if(!await bcryptjs.compare(password, userDados.password_hash))
                    return res.status(400).json({ message: "Senha incorreta!" });

                userDados.password_hash = undefined;

                const token = jwt.sign({ id: userDados.id }, authConfig.secret, {
                   expiresIn: 86400,
                });

                res.status(200).send({userDados, token: genereteToken({id: userDados.id}) });

            } catch (error) {
                return res.status(400).json({ message: error.message });    
            }
        }else{
            return res.status(400).json({ message: "Not send body empty" });
        }
    }
}

function genereteToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = new AuthController();