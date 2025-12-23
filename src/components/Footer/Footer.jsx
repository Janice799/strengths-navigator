import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">
                            <span className="text-gradient">Strengths</span>Navigator
                        </h3>
                        <p className="footer-tagline">당신의 강점이 곧 당신의 전략입니다</p>
                    </div>

                    <nav className="footer-nav">
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} StrengthsNavigator. All rights reserved.</p>
                    <p className="footer-credit">
                        Powered by <span className="text-gradient">Antigravity</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
