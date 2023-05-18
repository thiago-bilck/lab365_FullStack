const Task = require('../../models/task')

async function deleteTask(req,res) {

    console.log(req.params)

    if(!req.params.id){
        return res
        .status(406)
        .json({message: 'id não encontrado'})
    }

    //neste caso não criamos uma variável para armazenar a opção delete pois como o mesmo já diz, queremos deletar o dado
    await Task.destroy({
        where: {
            id: req.params.id,
        }
    })

    res.status(204).json({message: 'deletado com sucesso'})

}

module.exports = deleteTask;