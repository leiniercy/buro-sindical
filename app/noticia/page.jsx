'use client'
import React, { useEffect, useRef, useState } from 'react';
import CustomFieldset from '@components/CustomFieldset';
import { Toast } from 'primereact/toast';
import { FilterMatchMode, FilterOperator } from "primereact/api";
import NoticiaService from '@services/NoticiaService';
import Table from '@components/Noticia/Table';
import Tools from '@components/Noticia/Tools';
import DeleteNoticiaDialog from '@components/Noticia/DeleteNoticiaDialog';
import DialogForm from '@components/Noticia/DialogForm';


const Noticia = () => {

  let emptyNoticia = {
    id: null,
    autor: null,
    titulo: '',
    cuerpo: '',
    imagen: '',
    fecha: ''
  };

  const emptyFilters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    autor: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    titulo: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    cuerpo: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    imagen: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    fecha: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
};/*Mis filtros*/

  const globalFilterFields = [
    'autor', 'titulo', 'cuerpo', 'imagen', 'fecha'
  ];

  const toast = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [noticiaDialog, setNoticiaDialog] = useState(false);
  const [deleteNoticiaDialog, setDeleteNoticiaDialog] = useState(false);
  const [deleteNoticiasDialog, setDeleteNoticiasDialog] = useState(false);

  const [autorValid, setAutorValid] = useState(true);
  const [tituloValid, setTituloValid] = useState(true);
  const [cuerpoValid, setCuerpoValid] = useState(true);
  const [imagenValid, setImagenValid] = useState(true);
  const [fechaValid, setFechaValid] = useState(true);

  const [noticia, setNoticia] = useState(emptyNoticia);
  const [noticias, setNoticias] = useState(null);
  const [selectedNoticias, setSelectedNoticias] = useState(null);

  const noticiaService = new NoticiaService();

  useEffect(() => { }, []);

  const openNew = () => {
    setSubmitted(false);
    setNoticia(emptyNoticia);
    setNoticiaDialog(true);
    setEditActive(false);
  }; /*Abrir nueva ventana para crear un objeto*/

  const confirmDeleteSelected = () => {
    if (selectedNoticias.length > 1) {
      setDeleteNoticiasDialog(true);
    }
    if (selectedNoticias.length === 1) {
      setNoticia(selectedNoticias[0]);
      setDeleteNoticiaDialog(true);
    }
  }; /*Abrir el dialog de confirmacion de eliminacion de los objetos*/

  const onSelectionChangeSelectedObjects = (e) => {
    setSelectedNoticias(e.value);
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
    setNoticiaDialog(false);
    setSubmitted(false);
  }; /*Ocultar dialog de anadir*/

  const hideDeleteNoticiaDialog = () => {
    setDeleteNoticiaDialog(false);
  };/*Ocultar dialog de eliminar un objeto*/

  const hideDeleteNoticiasDialog = () => {
    setDeleteNoticiasDialog(false);
  };/*Ocultar dialog de eliminar varios objetos*/

  const deleteNoticia = () => {
    //modificar utilizando el servicio de consumo a la api   
    toast.current.show({
      severity: 'danger',
      summary: '!Atención',
      detail: 'Error al eliminar la noticia',
      life: 2000
    });
  };/*Elimnar un Objeto*/

  const deleteSelectedNoticias = () => {
    //eliminar activiades utilizando los servicios de la api
  };/*Eliminar varios objetos*/

  const validForm = () => {

  } //Validacion de los campos del formulario

  const save = () => {

  }; /*Crear o actualizar la informacion de un objeto*/

  const edit = (noticia) => {

  };/*Editar la informacion de un objeto existente*/

  const onInputTextChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _noticia = {...noticia};
    _noticia[`${name}`] = val;
    setProduct(_noticia);
};/*Modifica el valor del nombre del objeto*/
const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _noticia = {...noticia};
    _noticia[`${name}`] = val;
    setProduct(_noticia);
}; /*Modifica el valor de un numero especificado del objeto*/

  return (<>
    <CustomFieldset label={'Noticias'} icon={'pi-user-edit'}>
      <div className="col-12">
        <Tools
          openNew={openNew}
          confirmDeleteSelected={confirmDeleteSelected}
          selectedObjects={selectedNoticias}
        /> {/*barra de herramientas*/}
      </div>
      <div className="col-12">
        <Table
          headerLabel={'noticias'}
          objects={noticias}
          selectedObjects={selectedNoticias}
          setSelectedObject={onSelectionChangeSelectedObjects}
          emptyFilters={emptyFilters}
          globalFilterFields={globalFilterFields}
          actionBodyTemplate={actionBodyTemplate}
        />
      </div>
    </CustomFieldset>
    <Toast ref={toast} />

    <DialogForm
      visible={noticiaDialog}
      submitted={submitted}
      object={noticia}
      editActive={editActive}
      hideDialog={hideDialog}
      save={save}
      onInputTextChange={onInputTextChange}
      onInputNumberChange={onInputNumberChange}
      autorValid={autorValid}
      tituloValid={tituloValid}
      cuerpoValid={cuerpoValid}
      imagenValid={imagenValid}
      fechaValid={fechaValid}
    />

    <DeleteNoticiaDialog
      visible={deleteNoticiaDialog}
      hideDialog={hideDeleteNoticiaDialog}
      object={noticia}
      delete={deleteNoticia}
    />

    <DeleteNoticiaDialog
      visible={deleteNoticiasDialog}
      hideDialog={hideDeleteNoticiasDialog}
      object={noticia}
      delete={deleteSelectedNoticias}
    />

  </>);
}

export default Noticia;