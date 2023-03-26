import React from 'react'
import { FaArrowRight, FaBook } from "react-icons/fa";

function AssignmentCard(props){

    const {id, title, description, published, deadline, studentClass} = props.content;

    return (
        <>
            <div className="overflow-auto flex flex-col p-6 h-64 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div>
                    <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </p>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>


                <div className="mt-auto flex justify-between items-end">
                    <div>
                        <div className="text-gray-700 dark:text-gray-400">
                            <FaBook className='inline-block mr-2' size={12}  />
                            <span className="inline-block text-xs font-light">
                                {studentClass.name}
                            </span>
                        </div>

                        <div className="text-gray-700 dark:text-gray-400">
                            <span className="inline-block text-xs font-light pr-1">Published at</span>
                            <span className="inline-block text-xs font-bold">
                                {published}
                            </span>
                        </div>

                        <div className="text-gray-700 dark:text-gray-400">
                            <span className="inline-block text-xs font-light pr-1">Published at</span>
                            <span className="inline-block text-xs font-bold">
                                {deadline}
                            </span>
                        </div>
                    </div>

                    <button className="my-btn h-11 w-11">
                        <FaArrowRight />
                    </button>
                </div>
            </div>

        </>
    )
}

export default AssignmentCard
