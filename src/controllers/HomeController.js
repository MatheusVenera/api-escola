import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Matheus',
        sobrenome: 'Venera',
        email: 'matheusogliarivenera@gmail.com',
        idade: 19,
        peso: 55.3,
        altura: 1.77,
      });
      res.json(novoAluno);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new HomeController();
