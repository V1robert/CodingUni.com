import {useState} from "react";
import {Editor} from "@monaco-editor/react";
import {MONACO_THEME_DARK, MONACO_THEME_LIGHT} from "../../util/Constants.ts";
import {useLazyGetJavaOutputQuery} from "../../api/compilerApi.ts";
import {useParams} from "react-router-dom";

const CodeEditor = () => {
    const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`);
    const {programmingLanguage} = useParams()
    const [theme, setTheme] = useState(MONACO_THEME_DARK);
    const [trigger, {data, error, isFetching}] = useLazyGetJavaOutputQuery()

    async function handleRun() {
        const response = await trigger({code})
        console.log(response.data)
    }

    console.log(programmingLanguage?.toLowerCase())

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
        }
    };

    const changeTheme = () => {
        if (theme === MONACO_THEME_DARK) {
            setTheme(MONACO_THEME_LIGHT)
        } else {
            setTheme(MONACO_THEME_DARK);
        }
    }

    return (
        <div className="row g-0 w-100 mx-auto"
             style={{minHeight: "70vh", border: "1px solid #dee2e6", borderRadius: "8px", overflow: "hidden"}}>
            {/* Editor Section */}
            <div
                className={`${(data || error) ? 'col-lg-8 border-bottom border-lg-bottom-0 border-lg-end' : 'col-12'} d-flex flex-column`}
                style={{minHeight: "400px"}}>
                <div className="flex-grow-1 overflow-hidden">
                    <Editor
                        height="100%"
                        value={code}
                        onChange={handleEditorChange}
                        theme={theme}
                        options={{
                            fontSize: 14,
                            minimap: {enabled: false},
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                        }}
                        language={programmingLanguage?.toLowerCase()}
                    />
                </div>
                <div className="p-3 bg-light d-flex gap-2 border-top">
                    <button
                        className="btn btn-success px-4"
                        onClick={handleRun}
                        disabled={isFetching}
                    >
                        {isFetching ? (
                            <span className="spinner-border spinner-border-sm me-2" role="status"
                                  aria-hidden="true"></span>
                        ) : null}
                        {isFetching ? "Running..." : "Run Code"}
                    </button>
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={changeTheme}
                    >
                        {theme === MONACO_THEME_DARK ? "Switch to Light" : "Switch to Dark"}
                    </button>
                </div>
            </div>

            {/* Preview Section */}
            {(data || error) && (
                <div
                    className="col-lg-4 p-0 bg-dark d-flex flex-column fade-in-item border-top border-lg-top-0"
                    style={{maxHeight: "70vh"}}
                >
                    <div
                        className="d-flex align-items-center justify-content-between px-3 py-2 bg-dark border-bottom border-secondary">
                        <div className="d-flex align-items-center gap-2">
                            <div className={`rounded-circle ${data ? 'bg-success' : 'bg-danger'}`}
                                 style={{width: "10px", height: "10px"}}></div>
                            <h6 className="m-0 fw-bold text-white-50 text-uppercase"
                                style={{fontSize: "0.75rem", letterSpacing: "0.5px"}}>Output</h6>
                        </div>
                        {data ?
                            <span className="badge rounded-pill bg-success text-white"
                                  style={{fontSize: "0.7rem"}}>Success</span>
                            :
                            <span className="badge rounded-pill bg-danger text-white"
                                  style={{fontSize: "0.7rem"}}>Error</span>
                        }
                    </div>
                    <div className="flex-grow-1 p-3 overflow-auto">
                        <pre className="m-0 text-white-50" style={{
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-all",
                            fontFamily: "'Fira Code', 'Courier New', monospace",
                            fontSize: "0.85rem",
                            lineHeight: "1.6"
                        }}>
                            {data ? data.output : (error as any)?.data?.error || "An error occurred"}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeEditor;