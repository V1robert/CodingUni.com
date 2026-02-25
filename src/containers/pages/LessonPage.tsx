import {useSelector} from "react-redux";
import type {AppState} from "../../config/store/store.tsx";
import {Card, Col, Container, Row} from "react-bootstrap";
import type {Lesson} from "../../types/types.ts";
import {useNavigate} from "react-router";

const LessonPage = () => {
    const lessons = useSelector((state: AppState) => state.lesson)
    const programmingLanguage = useSelector((state: AppState) => state.language.name)
    const navigate = useNavigate()

    const handleLessonClick = (lesson: Lesson) => {
        console.log("Lesson clicked:", lesson.lessonId)
    }

    return (
        <Container className="py-5">
            {/* TODO AGGIUNGERE TRADUZIONI*/}
            <Row className="justify-content-center mb-5">
                <Col xs={12} className="text-center">
                    <h1 className="display-4 fw-bold text-primary mb-2">{programmingLanguage} Lessons</h1>
                    <p className="lead text-muted">Click on a lesson to get started.</p>
                </Col>
            </Row>

            {Array.isArray(lessons) && lessons.length > 0 ? (
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        {lessons.map((lesson: Lesson, index: number) => (
                            <div key={lesson.lessonId}>
                                {/* Clickable lesson card */}
                                <Card
                                    className="shadow-sm border-0 lesson-card"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleLessonClick(lesson)}

                                    style={{
                                        cursor: "pointer",
                                        transition: "transform 0.15s ease, box-shadow 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.02)"
                                        e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)"
                                        e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)"
                                    }}
                                >
                                    <Card.Body className="d-flex align-items-center">
                                        {/* Lesson number badge on the left */}
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fw-bold flex-shrink-0"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                fontSize: "1.2rem",
                                            }}
                                        >
                                            {index + 1}
                                        </div>

                                        {/* Lesson title and description */}
                                        <div className="ms-3">
                                            <Card.Title className="mb-1">{lesson.title}</Card.Title>
                                            <Card.Text className="text-muted mb-0 small">
                                                {lesson.description}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>

                                {index < lessons.length - 1 && (
                                    <div className="d-flex" style={{height: "48px"}}>
                                        <div
                                            style={{
                                                marginLeft: "39px", /* card padding (16px) + half badge width (24px) - half line width */
                                                width: "3px",
                                                height: "100%",
                                                backgroundColor: "#0d6efd",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </Col>
                </Row>
            ) : (
                /* Todo aggiungere traduzioni qua */
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <p className="text-muted">No lessons found for this course.</p>
                    </Col>
                </Row>
            )}


        </Container>
    );
};

export default LessonPage;
