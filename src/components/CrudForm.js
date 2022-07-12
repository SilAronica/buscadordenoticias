import React, { useState, useEffect } from 'react';

const initialForm ={
    name:"",
    Apellido:"",
    id: null,
}

const CrudForm = (createData, updateData, dataToEdit, setDataToEdit) => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!form.name || !form.Apellido)
        alert("Datos incompletos");
        return
    }

    if(form.id === null){
        createData(form);
    } else{
        updateData(form);
    }

   


    const handleReset = (e)=> {
        setForm(initialForm);
        setDataToEdit(null);
    }
    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange} 
                    value={form.name}
                />
                <input
                type="text" 
                name= "Apellido"
                placeholder="Apellido"
                onChange={handleChange}
                value={form.Apellido}
                />
                <input 
                type="submit"
                value="Enviar"
                />
                <input
                type="reset"
                value="Limpiar" 
                onClick={handleReset}
                />
            </form>
        </div>
    )
};

export default CrudForm;