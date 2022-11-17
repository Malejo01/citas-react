import React from 'react'

function Paciente() {
    return (
        <div className='m-5 bg-white shadow-lg px-5 py-10 rounded-xl'>
                <p className='font-bold mb-5 text-gray-700 uppercase'>Nombre: 
                <span className='font-normal normal-case'>Bushi</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Propietario: 
                <span className='font-normal normal-case'> Mauro</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Email: 
                <span className='font-normal normal-case'> correo@correo.com</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Fecha de Alta: 
                <span className='font-normal normal-case'> 16 de Diciembre de 2022</span></p>

                <p className='font-bold mb-5 text-gray-700 uppercase'>Sintomas: 
                <span className='font-normal normal-case'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aut placeat, soluta aperiam neque animi expedita voluptatum quaerat eos possimus?</span>
                </p>
            </div>
    )
}

export default Paciente
