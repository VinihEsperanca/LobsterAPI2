import { User, UserAttributes } from '../models/User';

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  async create(userData: Omit<UserAttributes, 'id'>): Promise<User> {
    return await User.create(userData);
  }

  async findById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }
}