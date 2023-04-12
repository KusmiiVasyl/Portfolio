import React, {useEffect, useState} from "react";
import Logo from "../assets/logo.svg"
import {Menu} from "./Menu";
import {Socials} from "./Socials";
import {MenuMobile} from "./MenuMobile";


export function Header(){
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return(
        <header className={`${bg ? 'bg-cyan-950 h-20' : 'h-24'}
         flex items-center fixed top-0 w-full text-cyan-50 z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <a href="#">
                    <img src={Logo} alt="Vasyl Kusmii"/>
                </a>
                <div className='hidden lg:block'>
                    <Menu/>
                </div>
                <div className='hidden lg:block'>
                    <Socials/>
                </div>
                <div className='lg:hidden'>
                    <MenuMobile/>
                </div>
            </div>
        </header>
    )
}

export default Header

