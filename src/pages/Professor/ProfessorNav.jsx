import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import {FaSignOutAlt} from 'react-icons/fa'


function ProfessorNav(props){

    const { active } = props

    const user = {
        name: "Robert Smith",
        email: "robertsmith@example.com",
    }

    const nameInitials = () => {
        const name = user.name.split(" ")
        return name[0][0] + name[ name.length - 1 ][0]
    }   

    return (
        <>
            <Navbar fluid={true} rounded={true} className='drop-shadow-md'>
                <div>
                <Navbar.Brand as={Link} to="/professor">
                    <img
                        src= {logo}
                        className="mr-3 h-9 md:h-12 sm:h-9"
                        alt="MepML Logo"
                        />
                        <span className="self-center whitespace-nowrap text-3xl font-extrabold logo-font">
                            MepML
                        </span>
                </Navbar.Brand>
                </div>
                <div className="flex md:order-2">
                    <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar
                        className='ml-20'
                        placeholderInitials = {nameInitials()}
                        rounded={true}
                        status="online"
                        statusPosition="bottom-right"
                        />}
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">
                        {user.name}
                        </span>
                        <span className="block truncate text-sm font-medium">
                        {user.email}
                        </span>
                    </Dropdown.Header>
                    <Link to="/" >
                        <Dropdown.Item className="w-full">
                            <FaSignOutAlt className="mr-2 mt-1" />
                            Sign out
                        </Dropdown.Item>
                    </Link>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/professor/classes" className='text-base' active={active === 'classes'}>
                        Classes
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/professor/public-exercices" className='text-base' active={active === 'public-exercices'}>
                        Public Exercices
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/professor/exercices" className='text-base' active={active === 'exercices'}>
                        Exercices
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default ProfessorNav