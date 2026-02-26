import {setPreferredLanguage} from "../../../config/store/slices/userSlice.ts";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import type {AppState} from "../../../config/store/store.tsx";
import {LANGUAGES} from "../../../util/Languages.ts";


const ChangeLanguages = () => {

    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: AppState) => state.user.preferredLanguage);

    return (

        <Form.Select
            size="sm"
            value={currentLanguage}
            onChange={(e) => dispatch(setPreferredLanguage(e.target.value))}
            aria-label="Select language"
            className="mx-auto"
            style={{maxWidth: "160px"}}
        >
            {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.label}
                </option>
            ))}
        </Form.Select>


    );
};

export default ChangeLanguages;