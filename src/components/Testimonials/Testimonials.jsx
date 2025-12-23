import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        text: "코칭을 통해 제 강점을 명확히 알게 되었고, 팀 내에서 제 역할을 재정의할 수 있었습니다. 업무 효율이 200% 이상 높아졌어요.",
        author: "김민수",
        role: "스타트업 CTO",
        avatar: "👨‍💻",
        rating: 5
    },
    {
        id: 2,
        text: "커리어 전환을 고민하던 중 코칭을 받았는데, 제가 진정으로 잘할 수 있는 일이 무엇인지 발견하게 되었습니다.",
        author: "박지연",
        role: "프리랜서 디자이너",
        avatar: "👩‍🎨",
        rating: 5
    },
    {
        id: 3,
        text: "팀 워크숍 후 팀원들 간의 이해도가 높아지고, 갈등이 크게 줄었습니다. 정말 투자할 가치가 있는 시간이었어요.",
        author: "이동훈",
        role: "마케팅 팀장",
        avatar: "👨‍💼",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="testimonials-header">
                    <div className="section-label">Testimonials</div>
                    <h2>함께한 <span className="text-accent">분들의 이야기</span></h2>
                    <p className="testimonials-subtitle">
                        강점 코칭을 경험한 분들의 실제 후기입니다
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.author}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
