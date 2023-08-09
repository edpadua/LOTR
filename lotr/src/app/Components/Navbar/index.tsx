import React from 'react'

import tw from "tailwind-styled-components"

import { LiaRingSolid } from "react-icons/lia"
import Search from '../Search';

const Nav = tw.nav`
    dark:bg-slate-800
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-5
`;

const NavContainer = tw.div`
    px-16 
    flex 
    dark:text-white 
    text-slate-800

`;

function Navbar() {
    return (
        <Nav>
            <NavContainer >
                <LiaRingSolid style={{ fontSize: '40px' }} />
                <Search/>
            </NavContainer>
        </Nav>
    )
}

export default Navbar