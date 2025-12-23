import './Services.css';

const servicesData = [
    {
        icon: '◆',
        title: '1:1 Coaching',
        description: 'CliftonStrengths 결과를 기반으로 나만의 강점 전략을 수립합니다. 6주 프로그램.',
        features: ['강점 리포트 분석', '개인 맞춤 전략', '주간 피드백'],
        highlight: true
    },
    {
        icon: '◇',
        title: 'Team Workshop',
        description: '팀원들의 강점을 매핑하고 최적의 협업 구조를 설계합니다.',
        features: ['팀 강점 매트릭스', '역할 재정의', '소통 가이드'],
        highlight: false
    },
    {
        icon: '○',
        title: 'Leadership',
        description: '리더로서의 고유한 강점을 발견하고 리더십 스타일을 정립합니다.',
        features: ['리더십 강점 분석', '피드백 스킬', '팀 동기부여'],
        highlight: false
    }
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-label label-style">Services</div>
                    <h2>함께할 수 있는 여정</h2>
                    <div className="divider centered"></div>
                    <p className="section-subtitle">
                        당신의 상황에 맞는 프로그램을 선택하세요
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${service.highlight ? 'highlighted' : ''}`}
                        >
                            {service.highlight && (
                                <div className="popular-badge">Popular</div>
                            )}
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-dot"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className="btn btn-secondary service-btn">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
