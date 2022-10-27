
//create react 

import React from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import "./Header.mod.css"


const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav/>

        <ProfilePicture src="https://avatars.githubusercontent.com/u/48362215?v=4" size="5em"/>
        </header>
    );

}


export {Header};