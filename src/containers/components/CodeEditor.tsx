import {useEffect, useState} from "react";
import {Editor} from "@monaco-editor/react";
import {MONACO_THEME_DARK, MONACO_THEME_LIGHT} from "../../util/Constants.ts";
import {useLazyGetJavaOutputQuery} from "../../api/compilerApi.ts";

const CodeEditor = () => {
    const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`);
    const [theme, setTheme] = useState(MONACO_THEME_DARK);
    const [trigger, {data, isFetching, error}] = useLazyGetJavaOutputQuery()

    async function handleRun() {
        trigger(code)
    }

    useEffect(() => {
        if (error) {
            console.error(error)
        }
    }, [error]);

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
        <div className="d-flex" style={{height: "60vh", border: "1px solid #dee2e6"}}>
            {/* Editor Section */}
            <div className="flex-grow-1 d-flex flex-column border-end">
                <div className="flex-grow-1">
                    <Editor
                        height="100%"
                        defaultLanguage="java"
                        value={code}
                        onChange={handleEditorChange}
                        theme={theme}
                    />
                </div>
                <div className="p-2 bg-light d-flex gap-2">
                    <button
                        className="btn btn-success btn-sm"
                        onClick={handleRun}
                        disabled={isFetching}
                    >
                        {isFetching ? "Running..." : "Run Code"}
                    </button>
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={changeTheme}
                    >
                        Change Theme
                    </button>
                </div>
            </div>

            {/* Preview Section */}
            <div
                className="flex-grow-1 p-3 bg-light overflow-auto"
                style={{minWidth: "300px"}}
            >
                <h5 className="border-bottom pb-2">Output:</h5>
                <pre className="mt-3" style={{whiteSpace: "pre-wrap"}}>{data}</pre>
            </div>
        </div>
    );
};

export default CodeEditor;