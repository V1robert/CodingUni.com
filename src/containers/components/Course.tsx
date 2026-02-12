import {useGetCoursesQuery} from "../../api/courseApi.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../config/store/store.tsx";
import ExoCard from "./common/ExoCard.tsx";

const Course = () => {

    const languageId = useSelector((state: RootState) => state.language.id)
    const {data} = useGetCoursesQuery(languageId)

    return (
        <div>
            {Array.isArray(data) && data.length > 0 &&
                data.map((corso) =>
                    <ExoCard key={corso.courseId} cardImagePath={corso.imagePath} cardTitle={corso.title}
                             cardDescription={corso.description}/>
                )}
        </div>
    );
};

export default Course;