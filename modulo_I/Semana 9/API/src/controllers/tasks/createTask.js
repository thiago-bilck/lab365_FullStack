const Task = require('../../models/task')

async function createTask (req, res) {
    //usamos hoje o try catch para tratar is erros que acontecem. O código funciona mas capta os erros ocorridos.  
  try {
      console.log(req.body)// console para mostar o id do usuário se tudo estiver certo com o token, isto vem da aba de validação do token: req.body.userId = conteudoDoToken.id

      const tarefa = {
          name: req.body.name,
          description: req.body.description,
          user_id: req.body.userId
      }
      
      if (!tarefa.name || !tarefa.description){ //o ponto de interrogação verifica se a informação não existe
          return res
          .status(401)
          .json({message: 'Nome e descrição são obrigatórios'})//esta linha obriga o usuário a digitar um nome. não esquecer do return que funciona para parar a execução do código
      }
      //neste caso a descrição ficou definida como possível de ser nula, então não precisa colocar a condição if
      
      //comando para verificar se a tarefa já existe:
      const taskInDatabase = await Task.findOne(
          {where: {name: tarefa.name}}) // éo mesmo que SELECT FROM tasks where name = ''. Estes métodos estão na documentação

          if(taskInDatabase !== null){
          return res
          .status(401)
          .json({message: 'Já existe uma tarefa cadastrada com este nome'})
          }
      

      //Task.create(tarefa) //este comando é o que cria a tabela no banco que criei data_base (aula 30/03)
      const newTask = await Task.create(tarefa) //esta variável foi criada para conseguir captura o que foi gerado com o comando create.(31/03)
      
      res.status(201).json(newTask) // 201 é o código padrão quando a requisição é bem sucedida. Esta é a nova forma recomendada
      
      //parte do código da aula dia 27/03
      //console.log(req.body.nome) //como está .nome, vai buscar só este dado. Se quiser pegar toda a mensagem, deixo apenas req.body
      //res.json({mensagem: 'tudo bem'})
  } catch (error) {
          res.send(500).json({message: 'Não conseguimos processar sua solicitação'})    }
  
}

module.exports = createTask