import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../Login/Login.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !password) {
            setError('모든 필드를 입력해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (password.length < 6) {
            setError('비밀번호는 6자 이상이어야 합니다.');
            return;
        }

        const result = signup(email, password, name);
        if (result.success) {
            navigate('/');
        } else {
            setError('회원가입에 실패했습니다.');
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
                        <div className="login-logo">🚀</div>
                        <h1>회원가입</h1>
                        <p>당신의 강점 여정을 시작하세요</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="홍길동"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

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
                                placeholder="6자 이상"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">비밀번호 확인</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            회원가입
                        </button>
                    </form>

                    <div className="login-divider">
                        <span>또는</span>
                    </div>

                    <div className="login-footer">
                        <p>
                            이미 계정이 있으신가요?{' '}
                            <Link to="/login">로그인</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
