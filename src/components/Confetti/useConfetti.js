import { useCallback } from 'react';
import confetti from 'canvas-confetti';

/**
 * 컨페티 효과를 위한 커스텀 훅
 * - 기본 컨페티
 * - 시즌별 커스터마이징 (눈송이, 별, 하트)
 * - 목표 달성 축하 효과
 */

const useConfetti = () => {
    // 기본 컨페티 발사
    const fireBasic = useCallback((options = {}) => {
        const defaults = {
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#f59e0b', '#10b981', '#3b82f6', '#c9a962']
        };
        confetti({ ...defaults, ...options });
    }, []);

    // 축하 컨페티 (양쪽에서 발사)
    const fireCelebration = useCallback(() => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;

        const colors = ['#8b5cf6', '#f59e0b', '#10b981', '#3b82f6'];

        const frame = () => {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    // 눈송이 효과 (겨울/크리스마스)
    const fireSnowflakes = useCallback(() => {
        const duration = 5000;
        const animationEnd = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: 300,
                origin: {
                    x: Math.random(),
                    y: -0.1
                },
                colors: ['#ffffff', '#e0e7ff', '#c7d2fe'],
                shapes: ['circle'],
                gravity: 0.3,
                scalar: 1.5,
                drift: Math.random() - 0.5
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    // 별 효과
    const fireStars = useCallback(() => {
        const defaults = {
            spread: 360,
            ticks: 100,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            colors: ['#c9a962', '#ffd700', '#fff8dc']
        };

        const shoot = () => {
            confetti({
                ...defaults,
                particleCount: 30,
                scalar: 1.2,
                shapes: ['star']
            });

            confetti({
                ...defaults,
                particleCount: 20,
                scalar: 0.75,
                shapes: ['circle']
            });
        };

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }, []);

    // 하트 효과 (발렌타인)
    const fireHearts = useCallback(() => {
        const heart = confetti.shapeFromPath({
            path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        });

        confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.6 },
            shapes: [heart],
            colors: ['#ff6b6b', '#ff8787', '#ffa8a8', '#ffc9c9'],
            scalar: 2
        });
    }, []);

    // 도메인별 컬러 컨페티
    const fireDomain = useCallback((domain) => {
        const domainColors = {
            executing: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
            influencing: ['#f59e0b', '#fbbf24', '#fcd34d'],
            relationship: ['#10b981', '#34d399', '#6ee7b7'],
            strategic: ['#3b82f6', '#60a5fa', '#93c5fd']
        };

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: domainColors[domain] || domainColors.strategic
        });
    }, []);

    return {
        fireBasic,
        fireCelebration,
        fireSnowflakes,
        fireStars,
        fireHearts,
        fireDomain
    };
};

export default useConfetti;
