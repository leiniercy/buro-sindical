'use client'
import React, { useEffect, useRef, useState } from 'react';
import CustomFieldset from '@components/CustomFieldset';
import { Toast } from 'primereact/toast';
import ActividadService from '@services/ActividadesService';
import Table from '@components/Actividad/Table';
import Tools from '@components/Actividad/Tools';
import DialogForm from '@components/Actividad/DialogForm';


const Actividad = () => {

  let emptyActividad = {
    id: null,
    fecha: null,
    lugar: '',
    descripcion: '',
    tipo: '',
    titulo: ''
  };

    const toast = useRef(null);

  const [lugarValid, setLugarValid] = useState(true);
  const [descripcionValid, setDescripcionValid] = useState(true);
  const [tipoValid, setTipoValid] = useState(true);
  const [tituloValid, setTituloValid] = useState(true);

  const [actividad, setActividad] = useState(emptyActividad);
  const [actividades, setActividades] = useState(null);
  const [selectedActividades, setSelectedActividades] = useState(null);

  const actividadService = new ActividadService();

  useEffect(() => { }, []);
  /*Abrir el dialog de confirmacion de eliminacion de los objetos*/

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
        // onClick={() => confirmDeleteActividad(rowData)}
        />
      </React.Fragment>
    );
  }; /*Acciones de cada columna de la tabla Update, Delete*/

  const hideDialog = () => {
    setActividadDialog(false);
    setSubmitted(false);
  }; /*Ocultar dialog de anadir*/

  const hideDeleteActividadDialog = () => {
    setDeleteActividadDialog(false);
  };/*Ocultar dialog de eliminar un objeto*/

  const hideDeleteActividadesDialog = () => {
    setDeleteActividadesDialog(false);
  };/*Ocultar dialog de eliminar varios objetos*/

  const deleteActividad = () => {
    //modificar utilizando el servicio de consumo a la api   
    toast.current.show({
      severity: 'danger',
      summary: '!Atención',
      detail: 'Error al eliminar el actividad',
      life: 2000
    });
  };/*Elimnar un Objeto*/

  const deleteSelectedActividades = () => {
    //eliminar activiades utilizando los servicios de la api
  };/*Eliminar varios objetos*/

  const validForm = () => {

  } //Validacion de los campos del formulario

  const save = () => {

  }; /*Crear o actualizar la informacion de un objeto*/

  const edit = (actividad) => {

  };/*Editar la informacion de un objeto existente*/

  const onInputTextChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _actividad = {...actividad};
    _actividad[`${name}`] = val;
    setProduct(_actividad);
};/*Modifica el valor del nombre del objeto*/
const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _actividad = {...actividad};
    _actividad[`${name}`] = val;
    setProduct(_actividad);
}; /*Modifica el valor de un numero especificado del objeto*/

  return (<>
    <CustomFieldset label={'Actividades'} icon={'pi-user-edit'}>
      <div className="col-12">
        <Tools
          openNew={openNew}
          confirmDeleteSelected={confirmDeleteSelected}
          selectedObjects={selectedActividades}
        /> {/*barra de herramientas*/}
      </div>
      <div className="col-12">
        <Table
          headerLabel={'actividades'}
        />
      </div>
    </CustomFieldset>
    <Toast ref={toast} />

  </>);
}

export default Actividad;