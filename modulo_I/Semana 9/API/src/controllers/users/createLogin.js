const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function createLogin(req,res) {

    try {
        const userInDatabase = await User.findOne({
            where: {
                cpf: req.body.cpf,
            }
        })
        //abaixo ocorre a verificação se o cpf existe
        if(!userInDatabase){
            return res
            .status(404)
            .json({message: "CPF ou senha incorreta"})
        }
    
        const passwordIsValid = await bcrypt.compare(req.body.password,userInDatabase.password)
        
        //verifica se a senha está correta
        if(!passwordIsValid){
            return res
            .status(404)
            .json({message: "Credenciais incorretas[password]"})
        }

        const token = jwt.sign(//a biblioteca jwt precisa de tres parâmetros: o id do usuário, a chave secreta e o tempo de validade
            {
            id: userInDatabase.id
            },
            //esta é a chave que vai permitir o desenvolvedor trabalhar com a senha
        //"MINHA_CHAVE_SECRETA",
        
        //posteriormente, com a instalação do dotenv, trocamos a chave secreta pelo código a seguir. E atribuída na aba .env
        process.env.CHAVE_DO_TOKEN,
        
        {
                expiresIn: "1h"
            }
        )
    
        res.json({name: userInDatabase, token: token})
    } catch (error) {
        res.status(500).json({message: "Não conseguimos processar sua solicitação"})
    }
    
}

module.exports= createLogin;