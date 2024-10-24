import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación con el backend
        try {
            // Simular llamada al backend
            console.log('Login data:', formData);
            navigate('/codes');
        } catch (error) {
            console.error('Error en login:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Usuario"
                        className="w-full p-2 border rounded"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <div className="flex justify-between gap-4">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="w-1/2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Volver
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Ingresar
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;