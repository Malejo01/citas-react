import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes}) {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h1 className='text-center font-black text-3xl'>Listado de Pacientes</h1>
            <p className='text-center mt-5 text-xl mb-10 '> Administra tus
                <span className='text-indigo-600 font-bold '> Pacientes y Citas</span>
            </p>
        {pacientes.map( (paciente, index)=> {
            return(
                <Paciente key={index} paciente={paciente}/>
            )
        })}
        </div>
    )
}

export default ListadoPacientes
