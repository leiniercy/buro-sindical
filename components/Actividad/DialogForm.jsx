import React from "react";
import PropTypes from 'prop-types';
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import CustomInputText from "@components/CustomInputText";


const DialogForm = (props) => {

    const dialogFooter = (<div className="flex flex-row justify-content-between w-full p-3">
        <Button label="Cancelar" icon="pi pi-times" outlined onClick={props.hideDialog}/>
        <Button label={props.editActive ? "Actualizar" : "Añadir"} icon="pi pi-check" onClick={props.save}/>
    </div>);/*Footer del dialog de anadir*/


    return (
        <Dialog visible={props.visible}
                style={{width: '32rem'}}
                breakpoints={{'960px': '75vw', '641px': '90vw'}}
                modal
                className="p-fluid"
                footer={dialogFooter}
                onHide={props.hideDialog}
        >

            <form id="product-form" onSubmit={props.save}>
                
                <div className="field">
                    <CustomInputText
                        label={'Lugar'}
                        error={'Lugar incorrecto.'}
                        object={props.object.name}
                        name={'lugar'}
                        onInputTextChange={props.onInputTextChange}
                        submitted={props.submitted}
                        valid={props.nameValid}
                    />
                </div>

                <div className="field">
                    <CustomInputText
                        label={'Descripción'}
                        error={'Lugar descripción.'}
                        object={props.object.name}
                        name={'lugar'}
                        onInputTextChange={props.onInputTextChange}
                        submitted={props.submitted}
                        valid={props.nameValid}
                    />
                </div>

                <div className="field">
                    <CustomInputText
                        label={'Tipo'}
                        error={'Tipo incorrecto.'}
                        object={props.object.name}
                        name={'lugar'}
                        onInputTextChange={props.onInputTextChange}
                        submitted={props.submitted}
                        valid={props.nameValid}
                    />
                </div>

                <div className="field">
                    <CustomInputText
                        label={'Título'}
                        error={'Título incorrecto.'}
                        object={props.object.name}
                        name={'lugar'}
                        onInputTextChange={props.onInputTextChange}
                        submitted={props.submitted}
                        valid={props.nameValid}
                    />
                </div>

            </form>
        </Dialog>
    );

}

DialogForm.propTypes = {
    save: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,

    onInputTextChange: PropTypes.func.isRequired,
    onInputNumberChange: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    editActive: PropTypes.bool.isRequired,
   
    lugarValid: PropTypes.bool.isRequired,
    descripcionValid: PropTypes.bool.isRequired,
    tipoValid: PropTypes.bool.isRequired,
    tituloValid: PropTypes.element.isRequired
}

export default DialogForm;