import { useState } from 'react';
import './styles/CodeEntry.css';

function CodeEntry() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de verificación de códigos
    };

    return (
        <div className="code-entry-container">
            <h2>Bienvenido, [Nombre Usuario]</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa tu código"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button type="submit">Verificar Código</button>
            </form>
            {result && (
                <div className="result-container">
                    <p>{result.message}</p>
                    {result.prize && <p>Premio: {result.prize}</p>}
                </div>
            )}
        </div>
    );
}