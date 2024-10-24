import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        city: '',
        cedula: '',
        phone: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de registro
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Fecha de Nacimiento"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Ciudad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Cédula"
                    value={formData.cedula}
                    onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="buttons-container">
                    <button type="button" onClick={() => navigate('/')}>Volver al Inicio</button>
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    );
}