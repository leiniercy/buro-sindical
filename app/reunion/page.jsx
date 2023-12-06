'use client'
import React, { useEffect, useRef, useState } from 'react';
import CustomFieldset from '@components/CustomFieldset';
import { Toast } from 'primereact/toast';
import { FilterMatchMode, FilterOperator } from "primereact/api";
import ReunionService from '@services/ReunionService';
import Table from '@components/Reunion/Table';
import Tools from '@components/Reunion/Tools';
import DeleteReunionDialog from '@components/Reunion/DeleteReunionDialog';
import DialogForm from '@components/Reunion/DialogForm';


const Reunion = () => {

  let emptyReunion = {
    id: null,
    fecha: null,
    lugar: '',
    descripcion: '',
    titulo: ''
  };

  const emptyFilters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    lugar: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    descripcion: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    titulo: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  };/*Mis filtros*/

  const globalFilterFields = [
    'lugar', 'descripcion', 'titulo'
  ];

  const toast = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [reunionDialog, setReunionDialog] = useState(false);
  const [deleteReunionDialog, setDeleteReunionDialog] = useState(false);

  const [lugarValid, setLugarValid] = useState(true);
  const [descripcionValid, setDescripcionValid] = useState(true);
  const [tituloValid, setTituloValid] = useState(true);

  const [reunion, setReunion] = useState(emptyReunion);
  const [reuniones, Reuniones] = useState(null);
  const [selectedReuniones, setSelectedReuniones] = useState(null);

  const reunionService = new ReunionService();

  useEffect(() => { }, []);

  const openNew = () => {
    setSubmitted(false);
    setReunion(emptyReunion);
    setReunionDialog(true);
    setEditActive(false);
  }; /*Abrir nueva ventana para crear un objeto*/

  const confirmDeleteSelected = () => {
    if (selectedReunioneses.length > 1) {
      setDeleteReunionesDialog(true);
    }
    if (selectedReuniones.length === 1) {
      setReunion(selectedReuniones[0]);
      setDeleteReunionDialog(true);
    }
  }; /*Abrir el dialog de confirmacion de eliminacion de los objetos*/

  const onSelectionChangeSelectedObjects = (e) => {
    setSelectedReuniones(e.value);
  } /*Se encarga de obtener la informacion de los objetos seleccionados*/

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2"
        // onClick={() => edit(rowData)}
        />
        <Button icon="pi pi-trash" rounded outlined severity="danger"
        // onClick={() => confirmDeleteActividad(rowData)}
        />
      </React.Fragment>
    );
  }; /*Acciones de cada columna de la tabla Update, Delete*/

  const hideDialog = () => {
    setReunionDialog(false);
    setSubmitted(false);
  }; /*Ocultar dialog de anadir*/

  const hideDeleteReunionDialog = () => {
    setDeleteReunionDialog(false);
  };/*Ocultar dialog de eliminar un objeto*/

  const hideDeleteReunionesDialog = () => {
    setDeleteReunionesDialog(false);
  };/*Ocultar dialog de eliminar varios objetos*/

  const deleteReunion = () => {
    //modificar utilizando el servicio de consumo a la api   
    toast.current.show({
      severity: 'danger',
      summary: '!Atención',
      detail: 'Error al eliminar la reunion',
      life: 2000
    });
  };/*Elimnar un Objeto*/

  const deleteSelectedReuniones = () => {
    //eliminar reunioneses utilizando los servicios de la api
  };/*Eliminar varios objetos*/

  const validForm = () => {

  } //Validacion de los campos del formulario

  const save = () => {

  }; /*Crear o actualizar la informacion de un objeto*/

  const edit = (reunion) => {

  };/*Editar la informacion de un objeto existente*/

  const onInputTextChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _reunion = {...reunion};
    _reunion[`${name}`] = val;
    setProduct(_reunion);
};/*Modifica el valor del nombre del objeto*/
const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _reunion = {...reunion};
    _reunion[`${name}`] = val;
    setProduct(_reunion);
}; /*Modifica el valor de un numero especificado del objeto*/

  return (<>
    <CustomFieldset label={'Reuniones'} icon={'pi-user-edit'}>
      <div className="col-12">
        <Tools
          openNew={openNew}
          confirmDeleteSelected={confirmDeleteSelected}
          selectedObjects={selectedReuniones}
        /> {/*barra de herramientas*/}
      </div>
      <div className="col-12">
        <Table
          headerLabel={'reuniones'}
          objects={reuniones}
          selectedObjects={selectedReuniones}
          setSelectedObject={onSelectionChangeSelectedObjects}
          emptyFilters={emptyFilters}
          globalFilterFields={globalFilterFields}
          actionBodyTemplate={actionBodyTemplate}
        />
      </div>
    </CustomFieldset>
    <Toast ref={toast} />

    <DialogForm
      visible={reunionDialog}
      submitted={submitted}
      object={reunion}
      editActive={editActive}
      hideDialog={hideDialog}
      save={save}
      onInputTextChange={onInputTextChange}
      onInputNumberChange={onInputNumberChange}
      lugarValid={lugarValid}
      descripcionValid={descripcionValid}
      tituloValid={tituloValid}
    />

    <DeleteReunionDialog
      visible={deleteReunionDialog}
      hideDialog={hideDeleteReunionDialog}
      object={reunion}
      delete={deleteReunion}
    />

    <DeleteReunionDialog
      visible={deleteReunionDialog}
      hideDialog={hideDeleteReunionesDialog}
      object={reunion}
      delete={deleteSelectedReuniones}
    />

  </>);
}

export default Reunion;