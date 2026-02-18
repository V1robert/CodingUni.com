import AppBar from "./AppBar.tsx";
import Footer from "./Footer.tsx"
import {Outlet} from "react-router";

const Template = () => {
    return (
        <div>
            <AppBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Template;