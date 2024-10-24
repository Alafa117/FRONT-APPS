import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        fechaNacimiento: '',
        ciudad: '',
        cedula: '',
        telefono: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de registro con el backend
        try {
            // Simular llamada al backend
            console.log('Signup data:', formData);
            navigate('/login');
        } catch (error) {
            console.error('Error en registro:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 py-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-2 border rounded"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                    <input
                        type="date"
                        placeholder="Fecha de Nacimiento"
                        className="w-full p-2 border rounded"
                        value={formData.fechaNacimiento}
                        onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Ciudad"
                        className="w-full p-2 border rounded"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Cédula"
                        className="w-full p-2 border rounded"
                        value={formData.cedula}
                        onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="w-full p-2 border rounded"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
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
                            className="w-1/2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        >
                            Registrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;