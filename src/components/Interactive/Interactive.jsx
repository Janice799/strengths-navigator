import ConfettiDemo from '../Confetti/Confetti';
import ScratchCardDemo from '../ScratchCard/ScratchCardDemo';
import './Interactive.css';

/**
 * 인터랙티브 요소 섹션
 * - 컨페티 데모
 * - 스크래치 카드 데모
 */
const Interactive = () => {
    return (
        <section className="interactive-section" id="interactive">
            <div className="container">
                <div className="interactive-header">
                    <span className="section-tag">✨ 인터랙티브</span>
                    <h2 className="section-title">
                        강점을 <span className="gradient-text">경험</span>하세요
                    </h2>
                    <p className="section-subtitle">
                        당신의 강점을 더 즐겁게 탐색할 수 있는 인터랙티브 요소들
                    </p>
                </div>

                <div className="interactive-grid">
                    <ConfettiDemo />
                    <ScratchCardDemo />
                </div>
            </div>
        </section>
    );
};

export default Interactive;
