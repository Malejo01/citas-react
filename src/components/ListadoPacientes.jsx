import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes}) {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            

        {pacientes.length !== 0 ? 
        <>
            <h1 className='text-center font-black text-3xl'>Listado de Pacientes</h1>
            <p className='text-center mt-5 text-xl mb-10 '> Administra tus
                <span className='text-indigo-600 font-bold '> Pacientes y Citas</span>
            </p>
        {pacientes.map( (paciente)=> {
            return(
                <Paciente 
                    key={paciente.id} 
                    paciente={paciente}/>
            )
        })}
        </>
        :<>
        <h1 className='text-center font-black text-3xl'>No hay pacientes aun</h1>
            <p className='text-center mt-5 text-xl mb-10 '> Comienza agregando pacientes
                <span className='text-indigo-600 font-bold '> y apareceran aqui</span>
            </p>
        </>}
        </div>
    )
}

export default ListadoPacientes
