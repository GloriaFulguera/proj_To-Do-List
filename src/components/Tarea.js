import React from "react";
import '../stylesheets/Tarea.css';


function Tarea({id, texto, completada, completarTarea}){
    return(
        <div className={completada ? "contenedor-tarea completada" : "contenedor-tarea"}>
          
          <div className="tarea-texto" onClick={()=>completarTarea(id)}>
            {texto}
          </div>
        </div>
    );
}

export default Tarea;