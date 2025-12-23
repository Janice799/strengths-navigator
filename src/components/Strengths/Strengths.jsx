import { strengthsData } from '../../data/strengthsData';
import './Strengths.css';

const Strengths = ({ coach }) => {
    const { topStrengths } = coach;

    const domainIcons = {
        executing: '⚡',
        influencing: '🎯',
        relationship: '💫',
        strategic: '🧠'
    };

    return (
        <section id="strengths" className="strengths-showcase section">
            <div className="container">
                <div className="strengths-header">
                    <div className="section-label">My Strengths</div>
                    <h2>Top 5 <span className="text-accent">Signature</span> Strengths</h2>
                    <p className="strengths-subtitle">
                        갤럽 CliftonStrengths 진단을 통해 밝혀진 저의 핵심 강점입니다
                    </p>
                </div>

                <div className="strengths-grid">
                    {topStrengths.map((strength, index) => {
                        const theme = strengthsData.themes[strength.key];
                        const isFeatured = index === 0;

                        return (
                            <div
                                key={strength.key}
                                className={`strength-card ${isFeatured ? 'featured' : ''}`}
                            >
                                <div className="strength-rank-badge">{index + 1}</div>
                                <span className="strength-icon">
                                    {domainIcons[theme.domain]}
                                </span>
                                <h3>{theme.name}</h3>
                                <p className="strength-korean">{theme.korean}</p>
                                <span className={`strength-domain ${theme.domain}`}>
                                    {theme.domain}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
