import AppBar from "./AppBar.tsx";
import Footer from "./Footer.tsx"
import {Outlet} from "react-router";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import i18n from "../i18n.ts";
import type {AppState} from "../config/store/store.tsx";


const Template = () => {
    const userPreferredLanguage = useSelector((state: AppState) => state.user.preferredLanguage);

    useEffect(() => {
        if (userPreferredLanguage) {
            i18n.changeLanguage(userPreferredLanguage);
        }
    }, [userPreferredLanguage]);

    return (
        <div>
            <AppBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Template;