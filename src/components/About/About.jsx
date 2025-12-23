import './About.css';

const About = ({ coach }) => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content-centered">
                    <div className="section-label">About Me</div>
                    <h2 className="about-title">
                        강점을 발견하고,
                        <span className="text-accent"> 전략으로 바꾸는 여정</span>
                    </h2>

                    <p className="about-text">
                        저는 사람들이 자신의 타고난 재능을 발견하고, 그것을 강점으로
                        발전시키는 과정을 돕습니다. 갤럽의 CliftonStrengths 도구를 통해
                        당신만의 고유한 재능 패턴을 분석하고, 이를 커리어와 삶의
                        전략으로 연결합니다.
                    </p>

                    <p className="about-text">
                        기업의 리더부터 커리어 전환을 고민하는 개인까지, 다양한
                        클라이언트와 함께해 왔습니다. <em>모든 코칭은 '당신'에서 시작합니다.</em>
                    </p>

                    {/* 통계 */}
                    <div className="about-stats-inline">
                        {Object.entries(coach.stats).map(([key, value]) => (
                            <div key={key} className="stat-item">
                                <span className="stat-value">{value}</span>
                                <span className="stat-label">
                                    {key === 'clients' ? '고객' : key === 'years' ? '경력' : '만족도'}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 자격증 */}
                    <div className="credentials-inline">
                        {coach.credentials.map((cred, index) => (
                            <span key={index} className="credential-badge">
                                ✓ {cred}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
