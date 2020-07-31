import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export const HeaderContainer = styled(Navbar)`
    background-color: black!important;
    color: white;
    padding: 15px 5%;
`

export const Logo = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
`

export const NavbarLink = styled(Link)`
    color: white;
    border: 2px solid white;
    padding: 8px 20px;
    border-radius: 20px;
    text-decoration: none!important;
    transition: all 0.2s ease-in;

    &:hover {
        background-color: #fff;
        color: black;
    }
`