import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import {NavbarLink, HeaderContainer, Logo} from './header.style';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
    <HeaderContainer collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Logo to="/" className='text-white' id="logo">Teacher.Bambinos</Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link className="my-2">
                <NavbarLink to="/signin" className='navbar-link my-3'>
                    <i className="mr-3 fas fa-sign-in-alt"></i>
                    Sign In
                </NavbarLink>
            </Nav.Link>
            <Nav.Link className="my-2"> 
                <NavbarLink to="/signup" className='navbar-link my-3 my-md-0'>
                    <i className="mr-3 fas fa-user-plus"></i>
                    Register
                </NavbarLink>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </HeaderContainer>
    // <div className='header'>
    //     <div className="header-container">
    //         <div className='logo-container'>
    //             <div className='logo'>Teacher.Bambinos</div>
    //         </div>
    //         <div className='header-items'>
    //             <Link className='header-link'>
    //                 <i class="fas fa-sign-in-alt"></i>
    //                 Sign In
    //             </Link>
    //             <Link className='header-link'>
    //                 <i class="fas fa-user-plus"></i>
    //                 Register
    //             </Link>
    //         </div>
    //     </div>
    // </div>
)

export default Header;