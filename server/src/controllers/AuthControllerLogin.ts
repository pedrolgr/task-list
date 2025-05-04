import { Request, RequestHandler, Response } from 'express';
import { Users } from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
const dotenv = require('dotenv');
import { AppDataSource } from '../data-source';

dotenv.config()

export class AuthControllerLogin {

    public static login = async (req: Request, res: Response) => {

        const { email, password } = req.body

        if (!email.trim() || !password.trim()) {
            res.status(400).send('Preencha todos os campos')
        }

        const userRepository = AppDataSource.getRepository(Users)
        
        try {

            const user = await userRepository.findOne({ where: {email} })

            if(!user) {
                res.status(401).send('E-mail ou senha incorretos')
                return;
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)

            if(!isPasswordValid) {
                res.status(401).send('E-mail ou senha incorretos')
            }
            const token = jwt.sign({
                id: user.id, email: user.email
            }, process.env.JWT_SECRET as string)

            res.status(200).json({token})

        } catch(e) {
            console.error(e)
            res.status(500).send('Erro ao logar')
        }

    } 
}