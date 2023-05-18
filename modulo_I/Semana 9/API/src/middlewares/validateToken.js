const jwt = require('jsonwebtoken')

function validateToken(req,res,next){
//validar se tem token no header da requisição
console.log(req.headers.authorization)
const token = req.headers.authorization;

if(!token || token === 'Bearer'){
    return res
    .status(403)
    .json({message: "Token não compatível"})
}

    const tokenJwt = token.slice(7)//é uma função javascript puro para cortar as 7 primeiras letras da string e pegar apenas o token. Ou seja, corta o Bearer e o espaço 

    jwt.verify(tokenJwt, "MINHA_CHAVE_SECRETA", (error, conteudoDoToken) => {
        if(error){
            if(error.name === "TokenExpiredError"){ //tem que ser xatamente este erro pois ele vem da biblioteca
                return res
                .status(403)
                .json({message: "Token expirado"})
            }
            else if (error.name === "JsonWebTokenError"){
                return res
                .status(403)
                .json({message: "Token inválido"})
            }
            else{
                return res.status(500).json({error:"Internal server error"})
            }

        }
        else
        console.log(conteudoDoToken)//console log para ver o id do usuário que criou a tarefa e mais dados sobre 
        req.body.userId = conteudoDoToken.id
        next()
    })

}

module.exports = validateToken;