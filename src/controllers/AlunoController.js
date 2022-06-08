import Aluno from '../models/Aluno';

class AlunoController {
  async createAluno(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = novoAluno;
      return res.status(200).json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async listarAlunos(req, res) {
    try {
      const listaAlunos = await Aluno.findAll();
      return res.status(200).json(listaAlunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async findAluno(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Você precisa informar o ID do aluno'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = aluno;
      return res.status(200).json({
        id, email, nome, sobrenome, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async updateAluno(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Você precisa informar o ID ou o Email do aluno'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      const novoAluno = await aluno.update(req.body);
      const {
        nome, sobrenome, idade, peso, altura,
      } = novoAluno;
      return res.status(200).json({
        id, nome, sobrenome, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async deleteAluno(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Você precisa informar o ID ou o Email do aluno'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      aluno.destroy();
      return res.status(200).json('Aluno excluído com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new AlunoController();
