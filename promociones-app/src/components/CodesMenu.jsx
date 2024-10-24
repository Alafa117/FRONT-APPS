import { useState } from 'react';

function CodesMenu() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);
    const username = "Usuario"; // Esto vendría del estado global o contexto

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de verificación de códigos con el backend
        try {
            // Simular llamada al backend
            const isWinner = Math.random() > 0.5;
            setResult({
                success: isWinner,
                message: isWinner ? "¡Felicitaciones! Has ganado un premio" : "Código no válido. Intenta nuevamente"
            });
            setCode('');
        } catch (error) {
            console.error('Error al verificar código:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Bienvenido, {username}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Ingresa tu código"
                        className="w-full p-2 border rounded"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Verificar Código
                    </button>
                </form>
                {result && (
                    <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {result.message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodesMenu;