import { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState('login'); // 'login' or 'signup'

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={e => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={onClose}>✕</button>
                <div className="auth-modal-tabs">
                    <button
                        className={mode === 'login' ? 'active' : ''}
                        onClick={() => setMode('login')}
                    >
                        로그인
                    </button>
                    <button
                        className={mode === 'signup' ? 'active' : ''}
                        onClick={() => setMode('signup')}
                    >
                        회원가입
                    </button>
                </div>
                {mode === 'login' ? <Login /> : <Signup />}
            </div>
        </div>
    );
};

export default AuthModal;
