import { Request, RequestHandler, Response } from 'express';
import { Users } from '../models/User';
import * as bcrypt from 'bcryptjs';
require("dotenv").config();
import { AppDataSource } from '../data-source';

export class AuthControllerRegister {

    public static register = async (req: Request, res: Response) => {
        
        const { email, password } = req.body

        if (!email.trim() || !password.trim()) {
            res.status(400).send('Preencha todos os campos')
        }

        const userRepository = AppDataSource.getRepository(Users)

        try {
            const existingUser = await userRepository.findOne({ where: {email} })
            if (existingUser) {res.status(400).send('Este e-mail já está sendo utilizado por outro usuário')}

            const newUser = new Users()
            newUser.email = email
            newUser.password = bcrypt.hashSync(password, 10)
        
            const savedUser = await userRepository.save(newUser)

            const { password: _, ...userWithoutPassword } = savedUser;
            res.status(201).json(userWithoutPassword);

        } catch(e) {
            console.error(e)
            res.status(500).send('Erro ao registrar usuário, contate o administrador')
        }

    }

}