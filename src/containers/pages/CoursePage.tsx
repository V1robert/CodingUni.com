import {useGetCoursesQuery} from "../../api/courseApi.ts";
import {useSelector} from "react-redux";
import type {AppState} from "../../config/store/store.tsx";
import ExoCard from "../components/common/ExoCard.tsx";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {LANGUAGE_IMAGE_MAP} from "../../util/Languages.ts";

const CoursePage = () => {

    const {programmingLanguage} = useParams<{ programmingLanguage: string }>()
    console.log(programmingLanguage)
    const languageId = useSelector((state: AppState) => state.language.id)
    const {data} = useGetCoursesQuery({programmingLanguageId: languageId, language: 'en'})
    const navigate = useNavigate()


    return (
        <Container fluid className="py-4 position-relative" style={{minHeight: "100vh"}}>
            <Row className="justify-content-center mb-5">
                <Col xs={12} className="text-center">
                    <h1 className="display-4 fw-bold text-primary mb-2">
                        Welcome to the <span className="text-capitalize">{programmingLanguage}</span> course!
                    </h1>
                    <p className="lead text-muted">Explore our courses and start learning today.</p>
                </Col>
            </Row>

            <Row className="justify-content-center g-4">
                {Array.isArray(data) && data.length > 0 &&
                    data.map((corso) =>
                        <Col key={corso.courseId} xs={12} sm={6} md={4} lg={3} xl={2}
                             className="d-flex justify-content-center">
                            <ExoCard cardImagePath={LANGUAGE_IMAGE_MAP[programmingLanguage!]}
                                     cardTitle={corso.title}
                                     cardDescription={corso.description}/>
                        </Col>
                    )}
            </Row>

            <div className="position-fixed bottom-0 start-0 m-4">
                <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => navigate(-1)}
                    className="shadow-sm"
                >
                    <i className="bi bi-arrow-left me-1"></i> Back
                </Button>
            </div>
        </Container>
    );
};

export default CoursePage;