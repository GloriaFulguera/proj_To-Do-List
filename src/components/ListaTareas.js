import React from "react";
import '../stylesheets/ListaTareas.css';
import Entrada from "./Entrada";
import Tarea from "./Tarea";
import { useState } from "react";

function ListaTareas(){

  const[tareas,setTareas]=useState([]);
  const[contador, setContador]=useState(0);

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];

      setTareas(tareasActualizadas);
      setContador(contador+1);
    }
  };

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(t=>{
      if(t.id === id){
        t.completada = !t.completada;
        if(t.completada===true){
          setContador(contador-1);
        }
        else{
          setContador(contador+1);
        }
      }
      return t;
    });
    setTareas(tareasActualizadas);

  }

    return(
      <>
        <Entrada onSubmit={agregarTarea} />
        <div className="tareas-pendientes">
          <h2>Tareas pendientes: {contador}</h2>
        </div>
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea)=>
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            />
            )
          }
        </div>
      </>
    );
}

export default ListaTareas;