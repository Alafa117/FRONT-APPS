import { useNavigate } from 'react-router-dom';
import './styles/Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="main-title">Gana Hasta 1M De Pesos</h1>
            <div className="buttons-container">
                <button onClick={() => navigate('/login')}>Log In</button>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </div>
    );
}