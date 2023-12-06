import React from 'react';

const ZonaSindical = () => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div className="mb-3">
                <img src={'./imagenes/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' className="w-6 shadow-2" />
            </div>
            <div>
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">             
              <div data-aos="zoom-in-down"></div>
                    <img src={'./imagenes/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' className="w-6 shadow-2" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                <div data-aos="zoom-in-left"></div>
                    <img src={'./imagenes/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' className="w-6 shadow-2" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                <div data-aos="flip-left"></div>
                    <img src={'./imagenes/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' className="w-6 shadow-2" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                <div data-aos="flip-right"></div>
                 <img src={'./imagenes/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' className="w-6 shadow-2" />
                </div>
            </div>
        </div>
    );
}

export default ZonaSindical;
