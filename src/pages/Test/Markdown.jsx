import { useState } from 'react';
import MDEditor, {codeEdit, codeLive, codePreview, divider} from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

export default function Markdown(props) {

    const {mode} = props;

    const [value, setValue] = useState("**Hello world!!!**");

    const uploadFileClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.addEventListener("change", () => {
          const file = input.files[0];

        if (!/\.md$|\.txt$/.test(file.name) || file.size > 1024 * 100) {
            alert("File must be a .md or .txt file up to 100kb");
            return;
        }
      
          const reader = new FileReader();
          reader.readAsText(file);
      
          reader.onload = () => {
            setValue(reader.result);
          };
        });
        input.click();
    };

    const handleDeleteClick = () => {
        setValue("");
    };

    return (
        <>
             <div className='center flex h-full'>
                <div className='scale-125 h-5/6 w-5/6 px-10' data-color-mode={mode}>
                    <MDEditor
                        value={value}
                        onChange={setValue}
                        highlightEnable={true}
                        autoFocus={true}
                        preview={'live'}        // edit, live, preview
                        hideToolbar={false}
                        visibleDragbar={false}
                        height={"100%"}
                        previewOptions={{rehypePlugins: [[rehypeSanitize]]}}
                        extraCommands={[
                            codeEdit, codeLive, codePreview,
                            divider,
                            {
                                name: "upload",
                                keyCommand: "upload",
                                buttonProps: { "aria-label": "Add file" , title: "Upload file"},
                                icon: (
                                    <svg viewBox="0 0 1024 1024" width="12" height="12">
                                        <path fill="currentColor" d="M716.8 921.6a51.2 51.2 0 1 1 0 102.4H307.2a51.2 51.2 0 1 1 0-102.4h409.6zM475.8016 382.1568a51.2 51.2 0 0 1 72.3968 0l144.8448 144.8448a51.2 51.2 0 0 1-72.448 72.3968L563.2 541.952V768a51.2 51.2 0 0 1-45.2096 50.8416L512 819.2a51.2 51.2 0 0 1-51.2-51.2v-226.048l-57.3952 57.4464a51.2 51.2 0 0 1-67.584 4.2496l-4.864-4.2496a51.2 51.2 0 0 1 0-72.3968zM512 0c138.6496 0 253.4912 102.144 277.1456 236.288l10.752 0.3072C924.928 242.688 1024 348.0576 1024 476.5696 1024 608.9728 918.8352 716.8 788.48 716.8a51.2 51.2 0 1 1 0-102.4l8.3968-0.256C866.2016 609.6384 921.6 550.0416 921.6 476.5696c0-76.4416-59.904-137.8816-133.12-137.8816h-97.28v-51.2C691.2 184.9856 610.6624 102.4 512 102.4S332.8 184.9856 332.8 287.488v51.2H235.52c-73.216 0-133.12 61.44-133.12 137.8816C102.4 552.96 162.304 614.4 235.52 614.4l5.9904 0.3584A51.2 51.2 0 0 1 235.52 716.8C105.1648 716.8 0 608.9728 0 476.5696c0-132.1984 104.8064-239.872 234.8544-240.2816C258.5088 102.144 373.3504 0 512 0z" />
                                    </svg>
                                ),
                                execute: uploadFileClick,                             
                            },
                            {
                                // delete button (trash can)
                                name: "delete",
                                keyCommand: "delete",
                                buttonProps: { "aria-label": "Delete content" , title: "Delete content"},
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg> 
                                ),
                                execute: handleDeleteClick,
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    )
}