const yup = require('yup');

const validation = yup.object().shape({
    name: yup
    .string("O nome deve ser uma string")
    .required("O nome é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha é obrgatória")
})

function validateNewUser(req, res, next) {
    console.log("Dado original", req.body);
try {
   // validation.validateNewUser(req.body);
    validation.validateSync(req.body)
    next();
    
} catch (error) {
    //console.log(error.message)
    res
    .status(400)
    .json({message: error.message})
}


   // next()
}

module.exports = validateNewUser;