import { Navbar, Button, DarkThemeToggle } from 'flowbite-react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

export default function HomeNav(){
    return (
        <>
            {/* <Navbar fluid={true} className='drop-shadow-md sticky top-0 z-10'>
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
                    <DarkThemeToggle />
                    <div className="ml-4" />
                    <Link to="/signin">
                        <Button>
                            Sign In
                        </Button>
                    </Link>
                </div>
                </Navbar> */}
            <div className='z-10 absolute top-2 left-2 p-2 flex center '>
                <img
                    src= {logo}
                    className="mr-3 h-9 md:h-12 sm:h-9"
                    alt="MepML Logo"
                />
                <span className="self-center whitespace-nowrap text-3xl font-extrabold logo-font text-white">
                    MepML
                </span>
            </div>

            <div className='z-10 absolute top-2 right-2 p-2 flex center'>
                <Link to="/signin">
                    <Button>
                        Sign In
                    </Button>
                </Link>
            </div>
        </>
    )
}
