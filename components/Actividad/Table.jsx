"use client"

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";


const Table = (props) =>  {

    const [filters, setFilters] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <h4 className="m-0"> {'Actividad ' + props.headerLabel } </h4>
                <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..."/>
            </span>
                    <Button type="button" icon="pi pi-filter-slash" /*label="Clear"*/ outlined onClick={clearFilter}/>
                </div>
            </div>
        );
    };/*Header de la tabla*/

    const initFilters = () => {
        setFilters(props.emptyFilters);
    };/*Filtros*/
    const clearFilter = () => {
        initFilters();
    };/*Filtros*/
    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback}
                       severity="secondary"></Button>;
    };/*Filtros*/
    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback}
                       severity="success"></Button>;
    };/*Filtros*/

    const header = renderHeader();/*Header de la tabla*/

    return(
        <DataTable
            value={props.objects}
            selection={props.selectedObjects}
            onSelectionChange={props.setSelectedObject}
            dataKey="id"
            removableSort
            filters={filters}
            globalFilterFields={props.globalFilterFields}
            paginator rows={5}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Muestra {first} de {last} de {totalRecords}"
            scrollable
            scrollHeight="400px"
            virtualScrollerOptions={{itemSize: 46}} tableStyle={{minWidth: '50rem'}}
            globalFilter={globalFilter}
            header={header}
        >
            <Column selectionMode="multiple" exportable={false}></Column>
           
            <Column field="fecha" header="Fecha" sortable filter
                    style={{minWidth: '16rem'}}></Column>
            <Column field="lugar" header="Lugar" sortable filter
                    filterPlaceholder="Bucar por lugar"
                    filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate}
                    style={{minWidth: '8rem'}}></Column>
            <Column field="descripcion" header="Descripción" sortable filter
                    filterPlaceholder="Bucar por descripción"
                    filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate}
                    style={{minWidth: '6rem'}}></Column>
            <Column field="tipo" header="Tipo" sortable filter
                    filterPlaceholder="Bucar por tipo"
                    filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate}
            />
             <Column field="titulo" header="Título" sortable filter
                    filterPlaceholder="Bucar por titulo"
                    filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate}
            />
            <Column body={props.actionBodyTemplate} exportable={false} style={{minWidth: '12rem'}}></Column>
        </DataTable>
    )

}

Table.propTypes = {
    headerLabel: PropTypes.string.isRequired,
    emptyFilters: PropTypes.object.isRequired,
    globalFilterFields: PropTypes.arrayOf(PropTypes.string).isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
    actionBodyTemplate: PropTypes.func.isRequired
}

export default Table;