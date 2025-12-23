import { useState } from 'react';
import useConfetti from './useConfetti';
import './Confetti.css';

/**
 * 컨페티 데모 컴포넌트
 * 다양한 컨페티 효과를 테스트하고 사용할 수 있는 UI
 */
const ConfettiDemo = () => {
    const confetti = useConfetti();
    const [lastFired, setLastFired] = useState('');

    const handleFire = (type, fireFn) => {
        fireFn();
        setLastFired(type);
    };

    return (
        <div className="confetti-demo">
            <h3 className="confetti-demo__title">🎊 컨페티 효과</h3>
            <p className="confetti-demo__subtitle">버튼을 클릭하여 다양한 효과를 확인하세요!</p>

            <div className="confetti-demo__buttons">
                <button
                    className="confetti-btn confetti-btn--basic"
                    onClick={() => handleFire('기본', confetti.fireBasic)}
                >
                    🎉 기본
                </button>
                <button
                    className="confetti-btn confetti-btn--celebration"
                    onClick={() => handleFire('축하', confetti.fireCelebration)}
                >
                    🎊 축하
                </button>
                <button
                    className="confetti-btn confetti-btn--snow"
                    onClick={() => handleFire('눈송이', confetti.fireSnowflakes)}
                >
                    ❄️ 눈송이
                </button>
                <button
                    className="confetti-btn confetti-btn--stars"
                    onClick={() => handleFire('별', confetti.fireStars)}
                >
                    ⭐ 별
                </button>
                <button
                    className="confetti-btn confetti-btn--hearts"
                    onClick={() => handleFire('하트', confetti.fireHearts)}
                >
                    💕 하트
                </button>
            </div>

            <div className="confetti-demo__domains">
                <p className="confetti-demo__domain-label">도메인별:</p>
                <div className="confetti-demo__domain-buttons">
                    <button
                        className="confetti-btn confetti-btn--executing"
                        onClick={() => handleFire('실행력', () => confetti.fireDomain('executing'))}
                    >
                        실행력
                    </button>
                    <button
                        className="confetti-btn confetti-btn--influencing"
                        onClick={() => handleFire('영향력', () => confetti.fireDomain('influencing'))}
                    >
                        영향력
                    </button>
                    <button
                        className="confetti-btn confetti-btn--relationship"
                        onClick={() => handleFire('관계구축', () => confetti.fireDomain('relationship'))}
                    >
                        관계구축
                    </button>
                    <button
                        className="confetti-btn confetti-btn--strategic"
                        onClick={() => handleFire('전략적 사고', () => confetti.fireDomain('strategic'))}
                    >
                        전략적 사고
                    </button>
                </div>
            </div>

            {lastFired && (
                <p className="confetti-demo__status">
                    마지막 발사: <strong>{lastFired}</strong> 효과
                </p>
            )}
        </div>
    );
};

export default ConfettiDemo;
export { useConfetti };
