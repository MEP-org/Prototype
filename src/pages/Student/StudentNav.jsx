import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import {FaSignOutAlt} from 'react-icons/fa'


function StudentNav(props){

    const { active } = props

    const user = {
        name: "Jack Connor",
        email: "jackconnor@example.com"
    }

    const nameInitials = () => {
        const name = user.name.split(" ")
        return name[0][0] + name[ name.length - 1 ][0]
    }   

    return (
        <>
            <Navbar fluid={true} rounded={true} className='drop-shadow-md'>
                <div>
                <Navbar.Brand as={Link} to="/student">
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
                    <Dropdown.Item>
                        <Link to="/" className="flex">
                            <FaSignOutAlt className="mr-2 mt-1" />
                            Sign out
                        </Link>
                    </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/student/home" className='text-base' active={active === 'home'}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/student/public-exercices" className='text-base' active={active === 'public exercices'}>
                        Public Exercices
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/student/assignments" className='text-base' active={active === 'assignments'}>
                        Assignments
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default StudentNav