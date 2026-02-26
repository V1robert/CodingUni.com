import {useGetCoursesQuery} from "../../api/courseApi.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppState} from "../../config/store/store.tsx";
import ExoCard from "../components/common/ExoCard.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {LANGUAGE_IMAGE_MAP} from "../../util/Languages.ts";
import {useEffect} from "react";
import {setCourse} from "../../config/store/slices/courseSlice.ts";
import type {Course} from "../../types/types.ts";

const CoursePage = () => {

    const userPreferredLanguage = useSelector((state: AppState) => state.user.preferredLanguage);
    const {programmingLanguage} = useParams()

    const {data: coursesData} = useGetCoursesQuery({
        programmingLanguage: programmingLanguage as string,
        language: userPreferredLanguage
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()


    function goToLessons(courseId: number) {
        navigate(`${courseId}/lessons`)
    }

    useEffect(() => {
        if (coursesData) {
            dispatch(setCourse(coursesData))
        }
    }, [coursesData, dispatch]);


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
                {Array.isArray(coursesData) && coursesData.length > 0 &&
                    coursesData.map((corso: Course) =>
                        <Col key={corso.courseId} xs={12} sm={6} md={4} lg={3} xl={2}
                             className="d-flex justify-content-center">
                            <ExoCard cardImagePath={LANGUAGE_IMAGE_MAP[programmingLanguage!]}
                                     cardTitle={corso.title}
                                     id={corso.courseId}
                                     callback={() => goToLessons(corso.courseId)}
                                     cardDescription={corso.description}/>
                        </Col>
                    )}
            </Row>


        </Container>
    );
};

export default CoursePage;
