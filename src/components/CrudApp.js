import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb =[
    {
        id:1,
        name: "Ana Lucía",
        Apellido: "Ramos",

    },
    {
        id:2,
        name: "Juan Bautista",
        Apellido: "Ramos",

    },
    {
        id:3,
        name: "Leo",
        Apellido: "Ramos",

    },
]

const CrudApp = () => {
  const[db,setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    setDb([...db, data]);
  };

  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <div>
        <h2>CRUD App</h2>
        <CrudForm createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}/>
        <CrudTable 
        data={db} 
        setDataToElit={setDataToEdit}
        deleteData={deleteData}/>
    </div>
  );
};

export default CrudApp;
