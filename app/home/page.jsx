'use client'
import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import CustomCarrusel from '@components/CustomCarrusel';
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
        </div>
)}



