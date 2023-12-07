"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import CustomCarrusel from '@components/CustomCarrusel';
import CustomAreaSindical from '@components/CustomAreaSindical';

export default function Home() {

    useEffect(() => {
        AOS.init({
            delay: 1, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
        })
    }, [])


return (
        <div className="card">
            <CustomCarrusel />
            <CustomAreaSindical/>
        </div>
)}



