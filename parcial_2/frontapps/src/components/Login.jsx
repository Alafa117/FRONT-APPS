import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación
        // Si es exitoso, redirigir a /codes
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="buttons-container">
                    <button type="button" onClick={() => navigate('/')}>Volver al Inicio</button>
                    <button type="submit">Iniciar Sesión</button>
                </div>
                <button type="button" onClick={() => navigate('/signup')}>Ir a Sign Up</button>
            </form>
        </div>
    );
}