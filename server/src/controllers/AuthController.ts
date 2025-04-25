import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { AppDataSource } from '../data-source';

export class AuthController {

    static register = async (req: Request, res: Response) => {
        
        const { email, password, name } = req.body

        if(!email.trim() || !password.trim() ) {
            return res.status(400).send('Preencha todos os campos')
        }

        try {

            
        }
    }
}