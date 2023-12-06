'use client'
import React, { useEffect, useRef, useState } from 'react';
import CustomFieldset from '@components/CustomFieldset';
import { Toast } from 'primereact/toast';
import {FilterMatchMode, FilterOperator} from "primereact/api";
import ActividadService from '@services/ActividadesService';
import Table from '@components/Actividad/Table';


const Actividad = () => {

  let emptyActividad = {
    id: null,
    fecha: null,
    lugar: '',
    descripcion: '',
    tipo: '',
    titulo: ''
  };

  const emptyFilters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    lugar: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    descripcion: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    tipo: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    titulo: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  };/*Mis filtros*/

  const globalFilterFields = [
    'lugar', 'descripcion', 'tipo', 'titulo'
  ];

  const toast = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [actividadDialog, setActividadDialog] = useState(false);
  const [deleteActividadDialog, setDeleteActividadDialog] = useState(false);
  const [deleteActividadsDialog, setDeleteActividadsDialog] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);

  const [lugarValid, setLugarValid] = useState(true);
  const [descripcionValid, setDescripcionValid] = useState(true);
  const [tipoValid, setTipoValid] = useState(true);
  const [tituloValid, setTituloValid] = useState(true);

  const [actividad, setActividad] = useState(emptyActividad);
  const [actividades, setActividades] = useState(null);
  const [selectedActividades, setSelectedActividades] = useState(null);

  const actividadService = new ActividadService();

  useEffect(()=> {},[]);

  const onSelectionChangeSelectedObjects = (e) => {
    setSelectedActividades(e.value);
} /*Se encarga de obtener la informacion de los objetos seleccionados*/

const actionBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <Button icon="pi pi-pencil" rounded outlined className="mr-2"
                  // onClick={() => edit(rowData)}
          />
          <Button icon="pi pi-trash" rounded outlined severity="danger"
                  // onClick={() => confirmDeleteProduct(rowData)}
          />
      </React.Fragment>
  );
}; /*Acciones de cada columna de la tabla Update, Delete*/



  return (<>
    <CustomFieldset label={'Actividades'} icon={'pi-user-edit'}>
      <div className="col-12">
        <Table
          headerLabel={'actividades'}
          objects={actividades}
          selectedObjects={selectedActividades}
          setSelectedObject={onSelectionChangeSelectedObjects}
          emptyFilters={emptyFilters}
          globalFilterFields={globalFilterFields}
          actionBodyTemplate={actionBodyTemplate}
        />
      </div>
    </CustomFieldset>
    <Toast ref={toast} />
  </>);
}

export default Actividad;