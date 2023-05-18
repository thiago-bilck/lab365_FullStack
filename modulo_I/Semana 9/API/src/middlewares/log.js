function log(req,res,next){
console.log(req);//mostrando a requisição
console.log('Método', req.method);//mostrando o método utilizado
console.log('Path', req.path);//mostrando o caminho 
console.log('Body', req.body); //mostrando o corpo do objeto recebido
console.log('Params', req.params)//mostrando os parâmetros 
next()
}

module.exports = log;