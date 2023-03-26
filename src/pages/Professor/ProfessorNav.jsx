import React, {  useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Navbar, Dropdown, Avatar, DarkThemeToggle } from 'flowbite-react'
import {FaSignOutAlt} from 'react-icons/fa'


function ProfessorNav(props){

    const { active } = props
    const navigate = useNavigate();
    const session = {
        user : { name : 'Robert Smith' , email : 'robertsmith@example.com' },
        type : 'professor',
    }

    useEffect(() => {
        if (session.type !== 'professor') {
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
            <Navbar fluid={true} className='drop-shadow-md'>
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
                    <div className='pl-10'/>
                    <DarkThemeToggle />
                    <div className="ml-4" />
                    <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar
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
                    <Navbar.Link as={Link} to="/professor/classes" className='text-base' active={active === 'classes'}>
                        Classes
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/professor/publicExercices" className='text-base' active={active === 'publicExercices'}>
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