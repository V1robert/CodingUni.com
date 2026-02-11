import AppBar from "./AppBar.tsx";
import {Outlet} from "react-router";

const Template = () => {
    return (
        <div>
            <AppBar/>
            <Outlet/>

        </div>
    );
};

export default Template;