import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/signup', {
                email,
                password
            })

        } catch(e) {
            console.error(e)
        }
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>

            <p>
                Já tem conta? <Link to="/login">Fazer login</Link>
            </p>
        </div>
    );
}

export default Signup