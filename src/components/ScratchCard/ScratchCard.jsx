import { useRef, useEffect, useState } from 'react';
import './ScratchCard.css';

/**
 * 스크래치 카드 컴포넌트
 * Canvas API를 사용하여 직접 구현 (React 19 호환)
 * - 긁으면 숨겨진 메시지 공개
 * - 진행률 추적
 * - 완료 시 콜백
 */
const ScratchCard = ({
    width = 300,
    height = 200,
    coverColor = 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    coverImage = null,
    brushRadius = 25,
    revealPercent = 60,
    onComplete = () => { },
    children
}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isScratching, setIsScratching] = useState(false);
    const [progress, setProgress] = useState(0);
    const lastPoint = useRef(null);

    // 캔버스 초기화
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // 그라디언트 커버 그리기
        if (coverImage) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, width, height);
            };
            img.src = coverImage;
        } else {
            // 그라디언트 배경
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#8b5cf6');
            gradient.addColorStop(0.5, '#c9a962');
            gradient.addColorStop(1, '#3b82f6');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // 텍스트 추가
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✨ 긁어서 확인하세요! ✨', width / 2, height / 2);
        }
    }, [width, height, coverImage]);

    // 진행률 계산
    const calculateProgress = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        let transparent = 0;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) transparent++;
        }

        const percent = (transparent / (pixels.length / 4)) * 100;
        setProgress(Math.round(percent));

        if (percent >= revealPercent && !isRevealed) {
            setIsRevealed(true);
            onComplete();
        }
    };

    // 스크래치 (그리기)
    const scratch = (x, y) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();

        if (lastPoint.current) {
            ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
            ctx.lineTo(canvasX, canvasY);
        } else {
            ctx.moveTo(canvasX, canvasY);
        }

        ctx.lineWidth = brushRadius * 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        lastPoint.current = { x: canvasX, y: canvasY };
    };

    // 마우스 이벤트
    const handleMouseDown = (e) => {
        setIsScratching(true);
        lastPoint.current = null;
        scratch(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
        if (!isScratching) return;
        scratch(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
        setIsScratching(false);
        lastPoint.current = null;
        calculateProgress();
    };

    // 터치 이벤트
    const handleTouchStart = (e) => {
        e.preventDefault();
        setIsScratching(true);
        lastPoint.current = null;
        const touch = e.touches[0];
        scratch(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (!isScratching) return;
        const touch = e.touches[0];
        scratch(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
        setIsScratching(false);
        lastPoint.current = null;
        calculateProgress();
    };

    return (
        <div
            className={`scratch-card ${isRevealed ? 'scratch-card--revealed' : ''}`}
            ref={containerRef}
            style={{ width, height }}
        >
            {/* 숨겨진 컨텐츠 */}
            <div className="scratch-card__content">
                {children}
            </div>

            {/* 스크래치 레이어 */}
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className={`scratch-card__canvas ${isRevealed ? 'scratch-card__canvas--hidden' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />

            {/* 진행률 표시 */}
            {!isRevealed && progress > 0 && (
                <div className="scratch-card__progress">
                    {progress}% 공개됨
                </div>
            )}
        </div>
    );
};

export default ScratchCard;
