import { useThemeMode, Button } from 'flowbite-react';

import MarkdownEditor from "../../components/MarkdownEditor"
import MarkdownViewer from "../../components/MarkdownViewer"

export default function Test() {

    const [,, toggleMode] = useThemeMode(); 

    return (
        <>
            <Button onClick={() => toggleMode()}>Toggle dark/light mode</Button>

            <div className='container'>
                <div className='font-bold text-2xl'>Markdown Editor</div>
                <div className='h-[700px]'>
                    <MarkdownEditor type='Description' />
                </div>

                <div className='font-bold text-2xl mt-10'>Markdown Viewer</div>
                <div className='h-[700px] mb-10'>
                    <MarkdownViewer type='Evaluation' text={'# Viewer !!!'} />
                </div>
            </div>
           
        </>
    )
}