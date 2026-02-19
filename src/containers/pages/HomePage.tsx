import {Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import {LANGUAGES} from "../../util/Languages.ts";
import {useDispatch} from "react-redux";
import {setLanguage} from "../../config/store/slices/languageSlice.ts";
import {useTranslation} from "react-i18next";


const HomePage = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation();
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section text-light">
                <Container className="py-5">
                    <Row className="align-items-center text-center text-md-start">
                        <Col md={8}>
                            <h1 className="display-4 fw-bold mb-3">
                                {t('hero-welcome')}
                            </h1>

                            <p className="lead mb-4">
                                {t('homepage-description')}
                            </p>

                            <div className="d-flex justify-content-center justify-content-md-start gap-3">
                                <Link to="/courses" className="btn btn-primary btn-lg">
                                    {t('hero-learn')}
                                </Link>

                                <Link to="/login" className="btn btn-outline-light btn-lg">
                                    {t('hero-sign in')}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* LANGUAGES SECTION */}
            <section className="py-5">
                <Container>
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="fw-bold">Languages You’ll Learn</h2>
                            <p className="text-muted">
                                Industry-relevant technologies, from frontend to backend
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4 justify-content-center">
                        {LANGUAGES.map((lang, index) => ( // Add 'index' here
                            <Col
                                key={lang.id}
                                xs={6}
                                sm={4}
                                md={3}
                                lg={2}
                                className="text-center fade-in-item"
                                style={{animationDelay: `${index * 0.2}s`}}
                            >
                                <Link
                                    onClick={() => dispatch(setLanguage({id: lang.id, name: lang.name, src: ""}))}
                                    to={`/courses/${lang.name}`}
                                    className="text-decoration-none"
                                >
                                    <img
                                        src={lang.src}
                                        alt={lang.name}
                                        className="img-fluid mb-2 language-logo"
                                        style={{maxHeight: "80px"}}
                                    />
                                    <div className="fw-medium">{lang.name}</div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FEATURES SECTION
            <section className="py-5">
                <Container>
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="fw-bold">Why CodingUni?</h2>
                            <p className="text-muted">
                                Everything you need to learn programming effectively
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        <Col md={4}>
                            <div className="feature-card">
                                <h5>🧠 Learn by Doing</h5>
                                <p>
                                    Practice real code with live compilation instead of just
                                    watching tutorials.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="feature-card">
                                <h5>📈 Track Your Progress</h5>
                                <p>
                                    Follow your learning journey and improve step by step.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="feature-card">
                                <h5>🔐 Secure & Personal</h5>
                                <p>
                                    Sign in securely and keep your progress saved across sessions.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            */}
        </>
    )
}

export default HomePage
