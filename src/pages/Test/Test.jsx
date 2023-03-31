import { useState } from 'react';
import { useThemeMode, Button } from 'flowbite-react';

import MarkdownEditor from "../../components/MarkdownEditor"
import MarkdownViewer from "../../components/MarkdownViewer"

export default function Test() {

    const [value, setValue] = useState('# Hello world!!!');
    const [mode,, toggleMode] = useThemeMode(); 

    return (
        <>
            <Button color={mode} onClick={() => toggleMode()}>Toggle dark/light mode</Button>

            <div className='container'>
                <div className='font-bold text-2xl'>Markdown Editor</div>
                <div className='h-[700px]'>
                    <MarkdownEditor type='Description' value={value} setValue={setValue} />
                </div>

                <div className='font-bold text-2xl mt-10'>Markdown Viewer</div>
                <div className='h-[700px] mb-10'>
                    <MarkdownViewer type='Evaluation' value={value} />
                </div>
            </div>
           
        </>
    )
}