import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import StrengthDNA from '../StrengthDNA/StrengthDNA';
import { strengthsData } from '../../data/strengthsData';
import './Hero.css';
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';

// Hero Component - 코치 프로필 중심 (강점 DNA 시각화)
const Hero = ({ coach }) => {
    const { user, logout } = useAuth();
    const { topStrengths } = coach;

    // 우세 도메인 결정
    const getDominantDomain = () => {
        const domainCount = { executing: 0, influencing: 0, relationship: 0, strategic: 0 };

        topStrengths.slice(0, 3).forEach((strength, index) => {
            const theme = strengthsData.themes[strength.key];
            if (theme) {
                domainCount[theme.domain] += (3 - index); // 가중치
            }
        });

        return Object.entries(domainCount).reduce((a, b) =>
            domainCount[a[0]] > domainCount[b[0]] ? a : b
        )[0];
    };

    const dominantDomain = getDominantDomain();

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    return (
        <section className="hero">
            {/* 상단 로그인/로그아웃 네비게이션 */}
            <nav className="hero-nav">
                {user ? (
                    <div className="nav-user">
                        <span className="user-greeting">안녕하세요, {user.name}님</span>
                        <button onClick={logout} className="nav-btn logout-btn">로그아웃</button>
                    </div>
                ) : (
                    <div className="nav-auth">
                        <button onClick={() => setAuthModalOpen(true)} className="nav-btn login-btn">로그인/회원가입</button>
                    </div>
                )}
            </nav>
            <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />
            {/* 강점 DNA 시각화 배경 */}
            <StrengthDNA
                topStrengths={topStrengths}
                strengthsData={strengthsData}
                dominantDomain={dominantDomain}
            />

            <div className="hero-container">
                {/* 프로필 이미지 */}
                <div className="profile-section">
                    <div className="profile-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                            alt={coach.name}
                            className="profile-image"
                        />
                    </div>
                </div>

                {/* 코치 정보 */}
                <div className="info-section">
                    {/* 배지 */}
                    <div className="coach-badge">
                        <span className="badge-icon">✦</span>
                        <span>Gallup Certified Coach</span>
                    </div>

                    {/* 인사말 */}
                    <h1 className="coach-name">{coach.name}</h1>
                    <p className="coach-tagline">{coach.tagline}</p>

                    {/* 간단 소개 */}
                    <p className="coach-intro">
                        당신의 강점을 발견하고, 그것을 삶의 전략으로 바꾸는 여정을 함께합니다.
                    </p>

                    {/* 연락처 링크 */}
                    <div className="contact-links">
                        <a href="https://example.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="link-icon">🌐</span>
                            <span className="link-text">홈페이지</span>
                        </a>
                        <a href="mailto:coach@example.com" className="contact-link">
                            <span className="link-icon">✉️</span>
                            <span className="link-text">이메일</span>
                        </a>
                        <a href="https://instagram.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="link-icon">📷</span>
                            <span className="link-text">인스타그램</span>
                        </a>
                        <a href="https://open.kakao.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="link-icon">💬</span>
                            <span className="link-text">오픈카카오톡</span>
                        </a>
                    </div>

                    {/* CTA 버튼 */}
                    <a href="#contact" className="cta-button">
                        코칭 문의하기
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </div>

            {/* 스크롤 인디케이터 */}
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section >
    );
};

export default Hero;
