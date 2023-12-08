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
                        <p class="text-gray-600 text-base lg:text-xl">estamos activos!</p>
                        <p class="text-gray-600 text-base lg:text-xl"> Juntos podemos.</p>
                    </div>
                </div>
            </div>

            <div class="relative grid flex flex-column gap-1 justify-center justify-content-center align-items-center w-full h-full">
                <div className='col-12 flex flex-row justify-content-center grid'>
                    <div class="col-5">
                        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Actividad deportiva</h2>
                        <p class="mt-6 text-gray-600">Nuestros jovenes en accion!</p>
                        <p class="mt-4 text-gray-600"> el futuro continua.</p>
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
                    <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                    <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                    <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                </div>


            </div>

        </div>
    );
}

export default ZonaSindical;
