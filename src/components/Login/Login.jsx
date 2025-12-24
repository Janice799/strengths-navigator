import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('이메일과 비밀번호를 입력해주세요.');
            return;
        }

        const result = login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError('로그인에 실패했습니다.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <Link to="/" className="back-link">
                    ← 홈으로 돌아가기
                </Link>

                <div className="login-card">
                    <div className="login-header">
                        <div className="login-logo">✨</div>
                        <h1>로그인</h1>
                        <p>강점 네비게이터에 오신 것을 환영합니다</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            로그인
                        </button>
                    </form>

                    <div className="login-divider">
                        <span>또는</span>
                    </div>

                    <div className="login-footer">
                        <p>
                            아직 계정이 없으신가요?{' '}
                            <Link to="/signup">회원가입</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
