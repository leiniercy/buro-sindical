import React from 'react';

const ZonaSindical = () => {
    return (
        <div className='relative flex flex-column gap-1 justify-center justify-content-center align-items-center w-full h-full'>
            <div className="relative flex flex-column gap-1 justify-center justify-content-center align-items-center w-full h-full">
                <div class="w-18rem">
                    <h1 className='w-full text-center'>Zona sindical</h1>
                </div>

                <div className='grid' data-aos="fade-right">
                    <div className='col-12 lg:col-5'>
                        <img className='w-full h-full' src={'/assets/image/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt="image" loading="lazy" width="" height="" />
                    </div>
                    <div class="col-12 lg:col-5 flex flex-column gap-1 px-1s">
                        <h2 class="text-2xl text-gray-900 font-bold md:text-3xl">Bastion Universitario</h2>
                        <p class="text-gray-600 text-base lg:text-xl"> Participar en el Bastión Estudiantil Universitario es una oportunidad única para elevar tu preparación patriótica y combativa, y honrar la memoria de los ocho estudiantes de medicina fusilados en 1871. ¡Anímate a participar y aportar tu granito de arena en la defensa de la Revolución y sus conquistas.</p>
                    </div>
                </div>
            </div>

            <div class="relative grid flex flex-column gap-1 justify-center justify-content-center align-items-center w-full h-full">
                <div className='col-12 flex flex-row justify-content-center grid'>
                    <div class="col-5">
                        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Actividad deportiva</h2>
                        <p class="mt-4 text-gray-600"> Participar en juegos deportivos es una excelente manera de mantenerse activo, mejorar la salud y el bienestar, y hacer nuevos amigos. Además, el deporte ayuda a superar frustraciones, a confiar más en uno mismo, a mejorar la autoestima y a hacerse más fuerte ante las derrotas 1. ¡Anímate a participar y disfruta de los beneficios que el deporte tiene para ofrecer!</p>
                    </div>
                    <div data-aos="fade-down-left" className="col-5">
                        <img className='w-full h-full' src={'/assets/image/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' />
                    </div>
                </div>
            </div>


            <div class="relative grid flex flex-row gap-1 justify-center justify-content-center align-items-center w-full h-full">
                <div class="col-5" data-aos="zoom-in-left">
                   
                <img className='w-full h-full' src={'/assets/image/ilustracion-plana-concepto-comunicacion-remota_720185-633.jpg'} alt='' />
                </div>
                <div class="col-5">
                    <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Ciencia y tecnologia</h2>
                    <p class="mt-4 text-gray-600"> Participar en actividades científicas y tecnológicas es una excelente manera de aprender cosas nuevas, desarrollar habilidades útiles, y contribuir al avance de la ciencia y la tecnología. Además, la ciencia y la tecnología son campos en constante evolución, lo que significa que siempre hay algo nuevo que descubrir y explorar 1. ¡Anímate a participar y descubre todo lo que la ciencia y la tecnología tienen para ofrecer! 1</p>
                </div>


            </div>

        </div>
    );
}

export default ZonaSindical;
