import React from 'react'

function Paciente({paciente}) {
    console.log(paciente.id)
    return (
        <div className='m-5 bg-white shadow-lg px-5 py-10 rounded-xl'>
                <p className='font-bold mb-5 text-gray-700 uppercase'>Nombre: 
                <span className='font-normal normal-case'>{paciente.nombre}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Propietario: 
                <span className='font-normal normal-case'>{paciente.propietario}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Email: 
                <span className='font-normal normal-case'>{paciente.email}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Fecha de Alta: 
                <span className='font-normal normal-case'>{paciente.fecha}</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Sintomas: 
                <span className='font-normal normal-case'>{paciente.sintomas}</span>
                </p>
            </div>
    )
}

export default Paciente
