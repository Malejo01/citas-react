import {useState, useEffect} from 'react'

function Form() {
    const [nombre, setNombre] =useState("")
    const [propietario, setPropietario] =useState("")
    const [email, setEmail] =useState("")
    const [fecha, setFecha] =useState("")
    const [sintomas, setSintomas] =useState("")

    const[error,setError] = useState(false)

    const handleSubmit= (e) =>{
        e.preventDefault();

        //Validacion de Formulario

        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log("Hay al menos un campo vacio")
            setError(true)
        return;
        } 
        setError(false)
    } 

    return (
        <div className='md:w-1/2 lg:w-2/5 mr-5'>
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className='text-center mt-5 text-xl mb-10 '> Añadir pacientes 
                    <span className="text-indigo-600 font-bold"> administralos</span>
                </p>
                
            <form onSubmit={handleSubmit}
            className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10 ml-10 ' >
                {error && (<div className='bg-red-800 text-center uppercase text-white p-3 mb-3 rounded font-bold'>
                                <p>Todos los campos son obligatorios</p>
                          </div>)}
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input type="text" 
                            placeholder='Nombre de tu mascota'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                            id='mascota'
                            value={nombre}
                            onChange= {(e) => setNombre(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='dueño' className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input type="text" 
                            placeholder='Nombre del dueño'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                            id='dueño'
                            value={propietario}
                            onChange= {(e) => setPropietario(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input type="email" 
                            placeholder='Email de Contacto'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                            id='email'
                            value={email}
                            onChange= {(e) => setEmail(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input type="date" 
                            placeholder='Fecha de alta'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                            id='email'
                            value={fecha}
                            onChange= {(e) => setFecha(e.target.value)}/>
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea id='sintomas' 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    placeholder='Describe los sintomas'
                    value={sintomas}
                            onChange= {(e) => setSintomas(e.target.value)}/>
                </div>

                <input type="submit" value="Agregar paciente"
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'></input>
            </form>
        </div>
    )
}

export default Form
