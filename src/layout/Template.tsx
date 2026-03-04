import AppBar from "./AppBar.tsx";
import Footer from "./Footer.tsx"
import {Outlet} from "react-router";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import i18n from "../i18n.ts";
import type {AppState} from "../config/store/store.tsx";


const Template = () => {
    const userPreferredLanguage = useSelector((state: AppState) => state.user.preferredLanguage);
    const isStudying = useSelector((state: AppState) => state.user.isStudying);
    useEffect(() => {
        if (userPreferredLanguage) {
            i18n.changeLanguage(userPreferredLanguage);
        }
    }, [userPreferredLanguage]);

    return (
        <div className="d-flex flex-column min-vh-100">
            {!isStudying &&
                <AppBar/>
            }
            <main className="flex-grow-1">
                <Outlet/>
            </main>
            {!isStudying &&
                <Footer/>
            }
        </div>
    );
};

export default Template;