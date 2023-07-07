import React from "react";
import '../stylesheets/Entrada.css';
import { useState } from "react";
import {v4 as uuid4} from 'uuid';
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function Entrada(props){
  const[input,setInput]=useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  };
  const manejarEnvio = e =>{
    e.preventDefault();
    const tareaNueva={
      id:uuid4(),
      texto:input,
      completa:false
    }
    props.onSubmit(tareaNueva);

  };
 

    return(
        <form className="tarea-formulario" >
          <TextField
          // id="outlined-basic"
          label="Nueva Tarea"
          variant="outlined"
          size="normal"
          // fullWidth
          color="primary"
          onChange={manejarCambio}
          />
          {/* <input className="tarea-input"
          type="text"
          placeholder="NUEVA TAREA"
          name="texto"
          onChange={manejarCambio}
          >
          </input> */}
          <Button 
          onClick={manejarEnvio}
          variant="contained"
          color="success"
          size="large"
          startIcon={<AddIcon/>}
          >
          AGREGAR
          </Button>
          {/* <button className="tarea-boton" >
            AGREGAR
          </button> */}
        </form>
    );
}

export default Entrada;