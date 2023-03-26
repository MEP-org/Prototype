import React from 'react'
import { Navbar, Button, Flowbite, DarkThemeToggle } from 'flowbite-react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

function HomeNav(){
    return (
        <>
            <Navbar fluid={true} className='drop-shadow-md sticky top-0 z-10'>
                <Navbar.Brand >
                    <img
                        src= {logo}
                        className="mr-3 h-9 md:h-12 sm:h-9"
                        alt="MepML Logo"
                    />
                    <span className="self-center whitespace-nowrap text-3xl font-extrabold logo-font">
                        MepML
                    </span>
                </Navbar.Brand>
                
                <div className="flex md:order-2">
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                    <div className="ml-4" />
                    <Link to="/signin">
                        <Button>
                            Sign In
                        </Button>
                    </Link>
                </div>
                </Navbar>
        </>
    )
}

export default HomeNav