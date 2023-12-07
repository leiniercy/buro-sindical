import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const Home = () => {
  return (<>
    <div className="flex align-items-center justify-content-center h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img src="/assets/image/logo-uci.png" alt="hyper" height={80} className="mb-3" />
          <div className="text-900 text-3xl font-medium mb-3">Buro Sindical</div>
          <span className="text-600 font-medium line-height-3">Aún no tienes cuenta?</span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Creala hoy!</a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">Usuario</label>
          <InputText id="email" type="text" placeholder="Nombre de usuario" className="w-full mb-3" />

          <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
          <InputText id="password" type="password" placeholder="Escribe tu contraseña personal" className="w-full mb-3" />

          <div className="flex align-items-center justify-content-end mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Olvidaste tu contraseña?</a>
          </div>

          <Button label="Iniciar sesión" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>

  </>);
}

export default Home;