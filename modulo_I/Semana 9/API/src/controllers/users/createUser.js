const User = require('../../models/user')
const bcrypt = require('bcryptjs')



async function createUser(req, res) {

    try {

        const userInDatabase = await User.findOne({
            where: {
                cpf: req.body.cpf}
            })

        if (userInDatabase){
            return res
            .status(409)
            .json({message: "Já há um usuário com esse cpf"})
        }
       
        //a criptografia da senha vem aqui, ou seja, antes de ela ser salva em uma constante
        const hash = await bcrypt.hash(req.body.password, 10)

        const newUser = {
            name: req.body.name,
            cpf: req.body.cpf,
            password: hash
        }

        //agora para exibir os dados do usuário criado mas não postar dados sensíveis como a senha, uso o jwt de acordo com as linhas abaixo
        const user = await User.create(newUser)

        const {password, ...rest} = user.toJSON()
            
        res.status(201).json(rest)

    } catch (error) {
        res.status(500).json({message: 'Não conseguimos processar sua solicitação'})

    }

}

module.exports = createUser;