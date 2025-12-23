import { useState } from 'react';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 성공 시 Confetti 효과!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#e94560', '#ff6b9d', '#a855f7', '#3498DB', '#2ECC71']
        });

        setSubmitted(true);
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (submitted) {
        return (
            <section id="contact" className="contact section">
                <div className="container">
                    <div className="success-message glass">
                        <div className="success-icon">💫</div>
                        <h2>감사합니다!</h2>
                        <p>2-3일 내로 연락드리겠습니다.</p>
                        <p className="success-subtitle">강점 여정의 첫 걸음을 함께하게 되어 기쁩니다.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="section-label">Contact</div>
                        <h2>
                            강점 여정을
                            <span className="text-gradient"> 시작해볼까요?</span>
                        </h2>
                        <p className="contact-description">
                            궁금한 점이 있거나 상담을 원하시면 메시지를 남겨주세요.
                            보통 2-3일 내로 회신드립니다.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span>coach@strengthsnavigator.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>서울, 대한민국</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link glass">LinkedIn</a>
                            <a href="#" className="social-link glass">Instagram</a>
                        </div>
                    </div>

                    <form className="contact-form glass" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="홍길동"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="interest">관심 프로그램</label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                            >
                                <option value="">선택해주세요</option>
                                <option value="1on1">1:1 강점 코칭</option>
                                <option value="team">팀 강점 워크숍</option>
                                <option value="leadership">리더십 강점 코칭</option>
                                <option value="other">기타 문의</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">메시지</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="궁금한 점이나 상담받고 싶은 내용을 자유롭게 작성해주세요."
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            코칭 문의하기
                            <span className="btn-arrow">→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
