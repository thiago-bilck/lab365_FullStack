const Task = require('../../models/task')

async function findTask (req, res) {

    try {
        const tasks = await Task.findAll()//chamamos esta função para encontrar as tarefas cadastadas no banco. Na prática é como se dessemos um select * from task direto no banco
        res.json(tasks)
        
        //diferente do código acima, aqui estamos buscando as tarefas específicas de cada usuário utilizando o id vinculado
        //const tasks = await Task.findAll({where: { 
        //user_id: req.body.userId
        //}})
    } catch (error) {
        res.status(500).json({message: 'Não conseguimos processar sua solicitação'})
    }

}

module.exports = findTask;