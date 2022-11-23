import React from 'react'

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        if(respuesta) {
            eliminarPaciente(paciente.id)
        }
    }
    
    return (
        <div className='m-5 bg-white shadow-lg px-5 py-10 rounded-xl'>
                <p className='font-bold mb-5 text-gray-700 uppercase'>Nombre: 
                <span className='font-normal normal-case'> {paciente.nombre}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Propietario: 
                <span className='font-normal normal-case'> {paciente.propietario}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Email: 
                <span className='font-normal normal-case'> {paciente.email}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Fecha: 
                <span className='font-normal normal-case'> {paciente.fecha}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Sintomas: 
                <span className='font-normal normal-case'> {paciente.sintomas}</span>
                </p>
                <div className='flex justify-end'>
                    <button type='button' 
                            onClick={() => setPaciente(paciente)}
                            className='py-2 px-10 bg-indigo-600  hover:bg-indigo-700 uppercase text-center font-bold text-white rounded m-3'>
                            Editar</button>
                    <button type='button' 
                            onClick={handleEliminar}
                            className='py-2 px-10 bg-red-600 hover:bg-red-700 uppercase text-center font-bold text-white rounded m-3'>
                            Eliminar</button>
                </div>
            </div>
    )
}

export default Paciente
