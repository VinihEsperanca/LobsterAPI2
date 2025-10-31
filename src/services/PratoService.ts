import { PratoRepository } from '../repositories/PratoRepository';
import { PratoAttributes } from '../models/Prato';

export class PratoService {
  private pratoRepository: PratoRepository;

  constructor() {
    this.pratoRepository = new PratoRepository();
  }

  async getAllPratos() {
    return await this.pratoRepository.findAll();
  }

  async createPrato(pratoData: Omit<PratoAttributes, 'id'>) {
    const existingPrato = await this.pratoRepository.findByRa(pratoData.nome);
    if (existingPrato) {
      throw new Error('Nome já existe');
    }
    return await this.pratoRepository.create(pratoData);
  }

  async updatePrato(nome: string, pratoData: Partial<PratoAttributes>) {
    const prato = await this.pratoRepository.update(nome, pratoData);
    if (!prato) {
      throw new Error('Prato não encontrado');
    }
    return prato;
  }

  async deletePrato(nome: string) {
    const deleted = await this.pratoRepository.delete(nome);
    if (!deleted) {
      throw new Error('Prato não encontrado');
    }
    return { message: 'Prato removido com sucesso' };
  }
}