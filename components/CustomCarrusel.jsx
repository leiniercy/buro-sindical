import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

export default function CustomCarrusel() {
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const slides = [
        { url: '/assets/image/istockphoto-1250668894-612x612.jpg' },
        { url: '/assets/image/istockphoto-1435663549-612x612.jpg' },
        { url: '/assets/image/istockphoto-1292993464-612x612.jpg' },
        { url: '/assets/image/istockphoto-1435663549-612x612.jpg' },

    ];
        
        




    const itemTemplate = (slide) => {
;
        return (
            <div className="h-30rem w-18rem lg:w-full border-1 surface-border border-round m-2 text-center py-5 px-3">
                <img className='h-full w-full object-cover' src={slide.url} alt='image'></img>
            </div>
        );
    };

    return (
            <Carousel value={slides} numVisible={1} numScroll={8} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate} circular autoplayInterval={3000}  />
    )
}
