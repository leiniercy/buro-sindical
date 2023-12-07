"use client"

import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import BarraMenu from '@components/BarraMenu';

const HomeLayout = ({ children }) => {

    useEffect(() => {
        AOS.init({
            delay: 1, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
        })
    }, [])

    return (<>
        <BarraMenu />
        {children}

    </>
    )
}

export default HomeLayout;