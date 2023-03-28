import { useThemeMode, Button } from 'flowbite-react';

import Markdown from "./Markdown"

export default function Test() {

    const [mode,, toggleMode] = useThemeMode(); 

    return (
        <>
            <Button onClick={() => toggleMode()}>Toggle dark/light mode</Button>

            <div className='container'>
                <div style={{height: '80vh'}}>
                    <Markdown mode={mode} />
                </div>             
            </div>
           
        </>
    )
}