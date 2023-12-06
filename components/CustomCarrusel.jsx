
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

export default function CircularDemo() {
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
    const Carousel = () => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={'./imagenes/Agenda-sindical.jpg'} alt='' className="w-6 shadow-2" />
                </div>
                <div>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <img src={'./imagenes/istockphoto-1250668894-612x612.jpg'} alt='' className="w-6 shadow-2" />
                        <img src={'./imagenes/istockphoto-1435663549-612x612.jpg'} alt='' className="w-6 shadow-2" />
                        <img src={'./imagenes/concepto-delegacion-autoridad-cargos_1016-1257.avif'} alt='' className="w-6 shadow-2" />
                    </div>
                </div>
            </div>
        );
    }


    useEffect(() => {
    }, []);


    return (
        <div className="card">
            <Carousel value={''} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000}/>
        </div>
    )
}
        