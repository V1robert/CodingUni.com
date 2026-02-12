import jsLogo from "../../public/assets/javascript.svg";
import tsLogo from "../../public/assets/typescript.svg";
import reactLogo from "../../public/assets/react.svg";
import javaLogo from "../../public/assets/java-original.svg";
import javaEELogo from "../../public/assets/javaEE.svg";
import mysqlLogo from "../../public/assets/mysql.svg";
import htmlLogo from "../../public/assets/html5.svg";
import cssLogo from "../../public/assets/css3.svg";
import type {ProgrammingLanguage} from "../types/types.ts";

export const LANGUAGES: ProgrammingLanguage[] = [
    {name: "HTML5", id: 0, src: htmlLogo},
    {name: "CSS3", id: 1, src: cssLogo},
    {name: "JavaScript", id: 2, src: jsLogo,},
    {name: "TypeScript", id: 3, src: tsLogo},
    {name: "React", id: 4, src: reactLogo},
    {name: "Java", id: 5, src: javaLogo},
    {name: "Java EE", id: 6, src: javaEELogo},
    {name: "MySQL", id: 7, src: mysqlLogo},

]