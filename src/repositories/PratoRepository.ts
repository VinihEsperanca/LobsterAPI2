import { Prato, PratoAttributes } from '../models/Prato';

export class PratoRepository {
  async findAll(): Promise<Prato[]> {
    return await Prato.findAll();
  }

  async findByRa(nome: string): Promise<Prato | null> {
    return await Prato.findOne({ where: { nome } });
  }

  async create(pratoData: Omit<PratoAttributes, 'id'>): Promise<Prato> {
    return await Prato.create(pratoData);
  }

  async update(nome: string, pratoData: Partial<PratoAttributes>): Promise<Prato | null> {
    const prato = await this.findByRa(nome);
    if (!prato) return null;
    
    await prato.update(pratoData);
    return prato;
  }

  async delete(nome: string): Promise<boolean> {
    const result = await Prato.destroy({ where: { nome } });
    return result > 0;
  }
}