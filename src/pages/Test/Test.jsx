import { useState } from 'react';
import MDEditor, {codeEdit, codeLive, codePreview} from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

import { useThemeMode } from 'flowbite-react';


export default function Test() {

    const [mode,, toggleMode] = useThemeMode(); 

    const [value, setValue] = useState("**Hello world!!!**");

    return (
        <>
            <button onClick={() => toggleMode()}>Toggle</button>

            <div data-aos='fade-up' data-color-mode={mode} 
                className='container delay-200 center flex h-96 my-20'
            >
                <div className='scale-125 h-5/6 w-5/6'>
                    <MDEditor
                        value={value}
                        onChange={setValue}
                        highlightEnable={true}
                        autoFocus={true}
                        preview={'live'}        // edit, live, preview
                        hideToolbar={false}
                        visibleDragbar={false}
                        height={"100%"}
                        extraCommands={[codeEdit, codeLive, codePreview]}
                        previewOptions={{rehypePlugins: [[rehypeSanitize]]}}
                    />
                </div>
            </div>
        </>
    )
}