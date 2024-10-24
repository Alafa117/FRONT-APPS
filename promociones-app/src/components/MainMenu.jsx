import { useNavigate } from 'react-router-dom';

function MainMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
            <h1 className="text-4xl font-bold mb-8 text-red-600">¡Gana Hasta 1M De Pesos!</h1>
            <div className="space-y-4">
                <button
                    onClick={() => navigate('/login')}
                    className="w-64 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Log In
                </button>
                <button
                    onClick={() => navigate('/signup')}
                    className="w-64 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default MainMenu;