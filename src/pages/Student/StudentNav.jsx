import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import {FaSignOutAlt} from 'react-icons/fa'


function StudentNav(props){

    const { active } = props
    const navigate = useNavigate();
    const session = {
        user : { name : 'Jack Connor', email: 'jackconnor@example.com' },
        type : 'student',
    }

    useEffect(() => {
        if (session.type !== 'student') {
            navigate('/')
        }
    }, [session])

    const handleLogout = () => {
        navigate('/');
    }

    const nameInitials = () => {
        const name = session.user.name.split(" ")
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
                        {session.user.name}
                        </span>
                        <span className="block truncate text-sm font-medium">
                        {session.user.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item className="w-full" onClick={handleLogout}>
                        <FaSignOutAlt className="mr-2 mt-1" />
                        Sign out
                    </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/student/home" className='text-base' active={active === 'home'}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/student/publicExercices" className='text-base' active={active === 'publicExercices'}>
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