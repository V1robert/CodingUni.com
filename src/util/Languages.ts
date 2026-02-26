import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/react.svg";
import javaLogo from "../assets/java-original.svg";
import javaEELogo from "../assets/javaEE.svg";
import mysqlLogo from "../assets/mysql.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css3.svg";
import type {ProgrammingLanguage} from "../types/types.ts";

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
    {name: "HTML5", id: 0, src: htmlLogo},
    {name: "CSS3", id: 1, src: cssLogo},
    {name: "JavaScript", id: 2, src: jsLogo,},
    {name: "TypeScript", id: 3, src: tsLogo},
    {name: "React", id: 4, src: reactLogo},
    {name: "Java", id: 5, src: javaLogo},
    {name: "Java EE", id: 6, src: javaEELogo},
    {name: "MySQL", id: 7, src: mysqlLogo},

]
/* Available languages for the language switcher */
export const LANGUAGES = [
    {code: "en", label: "English"},
    {code: "it", label: "Italiano"},
    {code: "fr", label: "Français"},
];
export const PROGRAMMING_LANGUAGE_IMAGE_MAP: Record<string, string> =
    Object.fromEntries(
        PROGRAMMING_LANGUAGES.map(lang => [lang.name, lang.src])
    );
