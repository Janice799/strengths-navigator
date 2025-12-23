import { useEffect, useRef } from 'react';
import p5 from 'p5';

/**
 * 도메인별 강점 DNA 시각화
 * - 실행력 (Executing): 보라색 프랙탈/기하학 패턴
 * - 영향력 (Influencing): 오렌지/레드 확산 파티클
 * - 관계 구축 (Relationship): 초록색 연결 네트워크
 * - 전략적 사고 (Strategic): 블루 기하학 패턴
 */

// 색상 팔레트
const DOMAIN_COLORS = {
    executing: { r: 139, g: 92, b: 246 },    // 보라색
    influencing: { r: 245, g: 158, b: 11 },  // 오렌지
    relationship: { r: 16, g: 185, b: 129 }, // 초록
    strategic: { r: 59, g: 130, b: 246 },    // 블루
    accent: { r: 201, g: 169, b: 98 }        // 골드
};

// 도메인 가중치 계산
const calculateDomainWeight = (topStrengths, strengthsData) => {
    const weights = { executing: 0, influencing: 0, relationship: 0, strategic: 0 };

    topStrengths.forEach((strength, index) => {
        const theme = strengthsData.themes[strength.key];
        if (theme) {
            // 순위가 높을수록 가중치 높음 (1위=5점, 5위=1점)
            weights[theme.domain] += (5 - index);
        }
    });

    // 정규화 (0~1 범위)
    const total = Object.values(weights).reduce((a, b) => a + b, 0);
    Object.keys(weights).forEach(key => {
        weights[key] = weights[key] / total;
    });

    return weights;
};

// 블렌드 색상 계산
const getBlendedColor = (weights) => {
    let r = 0, g = 0, b = 0;

    Object.keys(weights).forEach(domain => {
        const color = DOMAIN_COLORS[domain];
        r += color.r * weights[domain];
        g += color.g * weights[domain];
        b += color.b * weights[domain];
    });

    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
};

// 메인 컴포넌트
const StrengthDNA = ({ topStrengths, strengthsData, dominantDomain = 'strategic' }) => {
    const containerRef = useRef(null);
    const p5Instance = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 도메인 가중치 계산
        const weights = topStrengths && strengthsData
            ? calculateDomainWeight(topStrengths, strengthsData)
            : { [dominantDomain]: 1 };

        const primaryColor = DOMAIN_COLORS[dominantDomain] || DOMAIN_COLORS.strategic;
        const accentColor = DOMAIN_COLORS.accent;

        const sketch = (p) => {
            let particles = [];
            let connections = [];
            const numParticles = 50;

            class Particle {
                constructor() {
                    this.reset();
                }

                reset() {
                    this.x = p.random(p.width);
                    this.y = p.random(p.height);
                    this.size = p.random(2, 6);
                    this.baseSpeedX = p.random(-0.3, 0.3);
                    this.baseSpeedY = p.random(-0.3, 0.3);
                    this.speedX = this.baseSpeedX;
                    this.speedY = this.baseSpeedY;
                    this.alpha = p.random(40, 100);
                    this.pulseOffset = p.random(p.TWO_PI);

                    // 도메인 특성에 따른 행동
                    this.domain = this.assignDomain(weights);
                }

                assignDomain(weights) {
                    const rand = p.random();
                    let cumulative = 0;
                    for (const [domain, weight] of Object.entries(weights)) {
                        cumulative += weight;
                        if (rand <= cumulative) return domain;
                    }
                    return 'strategic';
                }

                update() {
                    // 도메인별 다른 움직임
                    switch (this.domain) {
                        case 'executing':
                            // 실행력: 직선적, 목표 지향적 움직임
                            this.x += this.speedX * 1.2;
                            this.y += this.speedY * 1.2;
                            break;
                        case 'influencing':
                            // 영향력: 밖으로 확산되는 움직임
                            const centerX = p.width / 2;
                            const centerY = p.height / 2;
                            const angle = p.atan2(this.y - centerY, this.x - centerX);
                            this.x += p.cos(angle) * 0.3 + this.speedX;
                            this.y += p.sin(angle) * 0.3 + this.speedY;
                            break;
                        case 'relationship':
                            // 관계 구축: 서로를 향해 부드럽게 이동
                            this.x += this.speedX * 0.8;
                            this.y += this.speedY * 0.8 + p.sin(p.frameCount * 0.02 + this.pulseOffset) * 0.5;
                            break;
                        case 'strategic':
                        default:
                            // 전략적 사고: 패턴을 그리며 이동
                            this.x += this.speedX + p.sin(p.frameCount * 0.01 + this.pulseOffset) * 0.3;
                            this.y += this.speedY + p.cos(p.frameCount * 0.01 + this.pulseOffset) * 0.3;
                    }

                    // 화면 바운드
                    if (this.x < 0) this.x = p.width;
                    if (this.x > p.width) this.x = 0;
                    if (this.y < 0) this.y = p.height;
                    if (this.y > p.height) this.y = 0;
                }

                draw() {
                    const color = DOMAIN_COLORS[this.domain];
                    const pulse = p.sin(p.frameCount * 0.03 + this.pulseOffset) * 0.3 + 0.7;

                    p.noStroke();
                    p.fill(color.r, color.g, color.b, this.alpha * pulse);
                    p.ellipse(this.x, this.y, this.size * pulse, this.size * pulse);

                    // 글로우 효과
                    p.fill(color.r, color.g, color.b, this.alpha * 0.2 * pulse);
                    p.ellipse(this.x, this.y, this.size * 2 * pulse, this.size * 2 * pulse);
                }
            }

            p.setup = () => {
                const canvas = p.createCanvas(
                    containerRef.current.offsetWidth,
                    containerRef.current.offsetHeight
                );
                canvas.parent(containerRef.current);

                for (let i = 0; i < numParticles; i++) {
                    particles.push(new Particle());
                }
            };

            p.draw = () => {
                p.clear();

                // 연결선 그리기 (관계 구축 도메인 강조)
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const d = p.dist(
                            particles[i].x, particles[i].y,
                            particles[j].x, particles[j].y
                        );
                        const maxDist = weights.relationship > 0.3 ? 200 : 150;

                        if (d < maxDist) {
                            const alpha = p.map(d, 0, maxDist, 40, 0);

                            // 연결선 색상 (두 파티클 도메인의 중간)
                            const c1 = DOMAIN_COLORS[particles[i].domain];
                            const c2 = DOMAIN_COLORS[particles[j].domain];

                            p.stroke(
                                (c1.r + c2.r) / 2,
                                (c1.g + c2.g) / 2,
                                (c1.b + c2.b) / 2,
                                alpha
                            );
                            p.strokeWeight(0.5);
                            p.line(
                                particles[i].x, particles[i].y,
                                particles[j].x, particles[j].y
                            );
                        }
                    }
                }

                // 파티클 업데이트 및 그리기
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });

                // 중심 글로우 효과 (골드)
                const pulseSize = 200 + p.sin(p.frameCount * 0.02) * 50;
                p.noStroke();
                for (let i = 3; i > 0; i--) {
                    p.fill(accentColor.r, accentColor.g, accentColor.b, 5 * i);
                    p.ellipse(p.width / 2, p.height / 2, pulseSize * i, pulseSize * i);
                }
            };

            p.windowResized = () => {
                if (containerRef.current) {
                    p.resizeCanvas(
                        containerRef.current.offsetWidth,
                        containerRef.current.offsetHeight
                    );
                }
            };
        };

        p5Instance.current = new p5(sketch);

        return () => {
            if (p5Instance.current) {
                p5Instance.current.remove();
            }
        };
    }, [topStrengths, strengthsData, dominantDomain]);

    return <div ref={containerRef} className="strength-dna-canvas" />;
};

export default StrengthDNA;
export { DOMAIN_COLORS, calculateDomainWeight };
