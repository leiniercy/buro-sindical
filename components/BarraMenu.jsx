"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function BarraMenu() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/home'
        },
        {
            label: 'Actividad',
            icon: 'pi pi-fw pi-pencil',
            url: '/home/actividad'
        },
        {
            label: 'Noticia',
            icon: 'pi pi-fw pi-user',
            url: '/home/noticia'
        },
        {
            label: 'Reunion',
            icon: 'pi pi-fw pi-calendar',
            url: '/home/reunion'
        },
    ];

    const start = <img alt="logo" src="/assets/image/logo-uci.png" height="40" className="mr-2"></img>;
    const end = <Button label='salir'  />;

    return (
        <div className="w-full h-3rem">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        