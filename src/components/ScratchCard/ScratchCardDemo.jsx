import { useState } from 'react';
import ScratchCard from './ScratchCard';
import { useConfetti } from '../Confetti/Confetti';
import './ScratchCard.css';

/**
 * 스크래치 카드 데모 컴포넌트
 * 강점 미션이나 메시지를 공개하는 인터랙티브 요소
 */

// 샘플 미션 데이터
const MISSIONS = [
    {
        emoji: '🌟',
        title: '이번 주 강점 미션',
        message: '"분석력"을 활용하여 한 가지 문제를 깊이 파고들어 보세요. 해결책이 보일 거예요!'
    },
    {
        emoji: '💪',
        title: '오늘의 도전',
        message: '"성취욕"의 에너지를 활용해 작은 목표를 세우고 달성해보세요!'
    },
    {
        emoji: '💡',
        title: '강점 인사이트',
        message: '당신의 "전략적 사고"는 다른 사람들에게 새로운 관점을 제공합니다.'
    },
    {
        emoji: '🎯',
        title: '숨겨진 메시지',
        message: '오늘 하루도 당신의 강점이 빛나는 하루가 되길!'
    }
];

const ScratchCardDemo = () => {
    const [currentMission, setCurrentMission] = useState(() =>
        MISSIONS[Math.floor(Math.random() * MISSIONS.length)]
    );
    const [isCompleted, setIsCompleted] = useState(false);
    const confetti = useConfetti();

    const handleComplete = () => {
        setIsCompleted(true);
        confetti.fireCelebration();
    };

    const handleReset = () => {
        setIsCompleted(false);
        setCurrentMission(MISSIONS[Math.floor(Math.random() * MISSIONS.length)]);
    };

    return (
        <div className="scratch-demo">
            <h3 className="scratch-demo__title">🎫 스크래치 카드</h3>
            <p className="scratch-demo__subtitle">
                긁어서 이번 주 강점 미션을 확인하세요!
            </p>

            <div className="scratch-demo__card-wrapper">
                <ScratchCard
                    key={currentMission.title}
                    width={280}
                    height={180}
                    brushRadius={30}
                    revealPercent={55}
                    onComplete={handleComplete}
                >
                    <div className="scratch-content">
                        <div className="scratch-content__emoji">{currentMission.emoji}</div>
                        <h4 className="scratch-content__title">{currentMission.title}</h4>
                        <p className="scratch-content__message">{currentMission.message}</p>
                    </div>
                </ScratchCard>
            </div>

            {isCompleted && (
                <div className="scratch-demo__result">
                    🎉 미션 확인 완료!
                    <button
                        className="scratch-demo__reset-btn"
                        onClick={handleReset}
                    >
                        새 카드 받기
                    </button>
                </div>
            )}
        </div>
    );
};

export default ScratchCardDemo;
