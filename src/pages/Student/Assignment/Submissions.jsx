import { useState, onClick, onClose } from "react";
import { BsBarChartFill, BsCodeSlash } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import {BsCloudDownload} from "react-icons/bs";
import {Spinner, Button, Modal} from "flowbite-react";

export default function Submissions(props){

    const { submissions, loading } = props;
    const [results, setResults] = useState(undefined);
    const [model, setModel] = useState(undefined);


    const handleFileUpload = (event, type) => {
        const file = event.target.files[0];

        if (type === "results") {
            setResults(file);
        }
        if (type === "model") {
            setModel(file);
        }
    }


    const handleRemoveFile = (type) => {
        type === "results" ? setResults(undefined) : setModel(undefined);
    }


    const downloadFile = (event, downloadLink) => {
        event.preventDefault();
        window.location.href = downloadLink;
    }


    const renderLoading = () => {
        return (
            <div className='w-fit mx-auto'>
                <Spinner size='xl' />
            </div> 
        )
    }


    const handleSubmit = () => {
        console.log("submit");
    }

    const renderSubmissions = () => {
        return (
            <>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center w-full relative">
                        <label htmlFor="dropzone-results" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <BsBarChartFill className="w-12 h-12 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drop</span> your results here</p>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-light">Or click</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">CSV file (.csv)</p>
                            </div>
                            <input id="dropzone-results" type="file" accept=".csv,.txt" className="hidden" onChange={(e) => handleFileUpload(e, "results")} />
                        </label>
    
                        { results && (
                            <div className="absolute bottom-4 right-4 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-2">
                                <div className="flex items-center justify-between w-full h-full p-2">
                                    <div className="flex center">
                                        <p className="text-sm font-semibold truncate">
                                            {results.name}
                                        </p>
                                        <p className="text-xs font-light truncate ml-1">
                                            ({results.size} bytes)
                                        </p>
                                    </div>
                                    <AiFillCloseCircle 
                                        className="w-6 h-6 ml-2 justify-self-end cursor-pointer text-gray-500 hover:text-red-500"
                                        onClick={() => handleRemoveFile("results")} 
                                    />
                                </div>
                            </div>
                        )}
                    </div> 
    
                    <div className="flex items-center justify-center w-full relative">
                        <label htmlFor="dropzone-model" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <BsCodeSlash className="w-12 h-12 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drop</span> your model here</p>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-light">Or click</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Python file (.py)</p>
                            </div>
                            <input id="dropzone-model" type="file" accept=".py" className="hidden" onChange={(e) => handleFileUpload(e, "model")} />
                        </label>
    
                        { model && (
                            <div className="absolute bottom-4 right-4 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-2">
                                <div className="flex items-center justify-between w-full h-full p-2">
                                    <div className="flex center">
                                        <p className="text-sm font-semibold truncate">
                                            {model.name}
                                        </p>
                                        <p className="text-xs font-light truncate ml-1">
                                            ({model.size} bytes)
                                        </p>
                                    </div>
                                    <AiFillCloseCircle 
                                        className="w-6 h-6 ml-2 justify-self-end cursor-pointer text-gray-500 hover:text-red-500"
                                        onClick={() => handleRemoveFile("model")} 
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                <div className="flex justify-end mt-2">
                    <Button onClick={onClick}>
                        Submit
                    </Button>

                    <Modal
                        show={false}
                        size="md"
                        popup={true}
                        onClose={onClose}
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className="text-center">
                           
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                            </h3>
                            <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={onClick}
                            >
                                Yes, I'm sure
                            </Button>
                            <Button
                                color="gray"
                                onClick={onClick}
                            >
                                No, cancel
                            </Button>
                            </div>
                        </div>
                        </Modal.Body>
                    </Modal>
                </div>
    
    
                {/* previous submission */}
                <div className="my-10">
                    <p className='mb-2 font-semibold text-2xl'>Your previous submission</p>
                    <div className="w-64 h-16 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-md px-2">
                        <div className="flex items-center justify-between w-full h-full p-2">
                            <div>
                                <div className="flex center">
                                    <p className="text-sm font-semibold truncate">
                                        {submissions.results.file.name}
                                    </p>
                                    <p className="text-xs font-light truncate ml-1">
                                        ({submissions.results.file.size} bytes)
                                    </p>
                                </div>
                                <p className="mt-1 text-xs font-extralight truncate text-gray-400">
                                    {submissions.results.uploadDate}
                                </p>
                            </div>
    
                            <BsCloudDownload 
                                className="w-5 h-5 justify-self-end cursor-pointer text-gray-500 hover:text-green-500"
                                onClick={(event) => downloadFile(event, submissions.results.file.url)} 
                            />
                        </div>
                    </div>
    
                    <div className="mt-2 w-64 h-16 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-md px-2">
                        <div className="flex items-center justify-between w-full h-full p-2">
                            <div>
                                <div className="flex center">
                                    <p className="text-sm font-semibold truncate">
                                        {submissions.model.file.name}
                                    </p>
                                    <p className="text-xs font-light truncate ml-1">
                                        ({submissions.model.file.size} bytes)
                                    </p>
                                </div>
                                <p className="mt-1 text-xs font-extralight truncate text-gray-400">
                                    {submissions.model.uploadDate}
                                </p>
                            </div>
    
                            <BsCloudDownload 
                                className="w-5 h-5 justify-self-end cursor-pointer text-gray-500 hover:text-green-500"
                                onClick={(event) => downloadFile(event, submissions.model.file.url)} 
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {loading ? renderLoading() : renderSubmissions()}
        </>
    );
}
