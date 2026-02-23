

import {useSelector} from "react-redux";
import type {AppState} from "../../config/store/store.tsx";
import {Col, Container, Row} from "react-bootstrap";
import type {Lesson} from "../../types/types.ts";

const LessonPage = () => {
    const lessons = useSelector((state: AppState) => state.lesson)

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Lessons</h1>
                    {lessons.length > 0 ? (
                        <ul className="list-group">
                            {lessons.map((lesson: Lesson) => (
                                <li key={lesson.lessonId} className="list-group-item">
                                    <h5>{lesson.title}</h5>
                                    <p>{lesson.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No lessons found for this course.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default LessonPage;
