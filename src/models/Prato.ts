import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface PratoAttributes {
  id?: number;
  nome: string;
  preco: number;
  desc: string;
}

export class Prato extends Model<PratoAttributes> implements PratoAttributes {
  public id!: number;
  public nome!: string;
  public preco!: number;
  public desc!: string;
}

Prato.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Prato',
  tableName: 'pratos'
});