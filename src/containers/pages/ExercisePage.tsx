import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setIsStudying} from "../../config/store/slices/userSlice.ts";

const ExercisePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        // 1. When the component mounts, set isStudying to true
        dispatch(setIsStudying(true));
        // It runs automatically when the component unmounts (user leaves the page).
        return () => {
            dispatch(setIsStudying(false));
        };
    }, [dispatch]);


    return (
        <div>
            <h1>Exercise Page</h1>
        </div>
    );
};

export default ExercisePage;