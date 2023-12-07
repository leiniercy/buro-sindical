'use client'
import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect } from 'react';
import CustomCarrusel from '@components/CustomCarrusel';
import CustomAreaSindical from '@components/CustomAreaSindical';

export default function Home() {
  const items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'actividades', icon: 'pi pi-fw pi-calendar'},
      {label: 'reunion', icon: 'pi pi-fw pi-user-plus'},
      {label: 'noticias', icon: 'pi pi-fw pi-file'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Search', icon: 'pi pi-fw pi-users'},
      {label: 'Quit', icon: 'pi pi-fw pi-power-off'},
  ];


return (
        <div className="card">
            <TabMenu model={items} />
            <CustomCarrusel />
            <CustomAreaSindical/>
        </div>
)}



