import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/UserRepository';
import { UserAttributes } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'PenaltiFoiPix';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(userData: Omit<UserAttributes, 'id'>) {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.userRepository.create({
      ...userData,
      password: hashedPassword
    });

    return { message: 'Usuário criado com sucesso' };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Acesso não autorizado');
    }

    const token = jwt.sign(
      { userId: user.id, userName: user.nome },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return { token };
  }
}