import { BsBarChartFill, BsCodeSlash } from "react-icons/bs";

export default function Submissions(){

    return (
        <>

        <div className="grid lg:grid-cols-2 gap-4">

            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-results" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <BsBarChartFill className="w-12 h-12 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drop</span> your results here</p>
                        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-light">Or click</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">CSV file (.csv)</p>
                    </div>
                    <input id="dropzone-results" type="file" className="hidden" />
                </label>
            </div> 

            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-model" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <BsCodeSlash className="w-12 h-12 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drop</span> your model here</p>
                        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-light">Or click</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Python file (.py)</p>
                    </div>
                    <input id="dropzone-model" type="file" className="hidden" />
                </label>
            </div>

        </div>
            

        </>
    )
}
