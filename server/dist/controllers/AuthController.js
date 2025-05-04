"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const User_1 = require("../models/User");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
require("dotenv").config();
const data_source_1 = require("../data-source");
class AuthController {
}
exports.AuthController = AuthController;
_a = AuthController;
AuthController.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email.trim() || !password.trim()) {
        res.status(400).send('Preencha todos os campos');
    }
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.Users);
    try {
        const existingUser = yield userRepository.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).send('Este e-mail já está sendo utilizado por outro usuário');
        }
        const newUser = new User_1.Users();
        newUser.email = email;
        newUser.password = bcrypt.hashSync(password, 10);
        const savedUser = yield userRepository.save(newUser);
        const { password: _ } = savedUser, userWithoutPassword = __rest(savedUser, ["password"]);
        res.status(201).json(userWithoutPassword);
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Erro ao registrar usuário, contate o administrador');
    }
});
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email.trim() || !password.trim()) {
        res.status(400).send('Preencha todos os campos');
    }
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.Users);
    try {
        const user = yield userRepository.findOne({ where: { email } });
        if (!user) {
            res.status(401).send('E-mail ou senha incorretos');
            return;
        }
        const isPasswordValid = yield bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).send('E-mail ou senha incorretos');
        }
        const token = jwt.sign({
            id: user.id, email: user.email
        }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Erro ao logar');
    }
});
