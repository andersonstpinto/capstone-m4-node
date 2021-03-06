import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import "dotenv/config";

import { IUserAuth, IUserToken } from "../../interfaces/users";

export default class authUserService {
  public async execute({ cpf, password }: IUserAuth): Promise<IUserToken> {
    const userRepository = AppDataSource.getRepository(User);
  
    const user = await userRepository.findOne({ where: { cpf } });
  
    if (!user || !cpf) {
      throw new AppError("Incorrect CPF and/or password.", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Incorrect CPF and/or password.", 401);
    }

    const token = sign(
      { cpf: user.cpf, isAdmin: user.isAdmin },
      String(process.env.JWT_SECRET),
      {
        subject: user.id,
        expiresIn: "24h",
      }
    );

    return { token };
  }
}
