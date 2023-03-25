import React from 'react'
import { Table } from 'flowbite-react'
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa'


function StudentsTable(props){

    console.log(props.myClass);


    const renderStudentsTable = () => {

        return (
                <>
                    {props.myClass.map((item) => 
                        <Table.Row key={item.Nmec} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item.Nmec}
                            </Table.Cell>
                            <Table.Cell>
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>
                            {/* Edit Element */}
                            <a href="">
                                <div>
                                    <FaUserEdit />
                                </div>
                            </a>
                            </Table.Cell>
                            <Table.Cell>
                                {/* Delete Element */}
                                <a href="">
                                    <div>
                                        <FaTrashAlt />
                                    </div>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </>  
        );
    }
    

    return (
        <>
            <div>
                <Table striped={true} hoverable={true} style={{ fontSize: '1em' }}>
                    <Table.Head style={{ fontSize: '1.2em', height: '3em' }}>
                        <Table.HeadCell className='w-1/6'>
                            NMEC
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Nome
                        </Table.HeadCell>
                        <Table.HeadCell className='w-1/12'>
                        <span className="sr-only">
                            Edit
                        </span>
                        </Table.HeadCell>
                        <Table.HeadCell className='w-1/12'>
                        <span className="sr-only">
                            Delete
                        </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {renderStudentsTable()}
                        {/* {rows} */}
                    </Table.Body>
                    </Table>
            </div>
        </>
    )


}



export default StudentsTable