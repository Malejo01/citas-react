import {useState, useEffect} from 'react'
import Error from './Error'

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] =useState("")
    const [propietario, setPropietario] =useState("")
    const [email, setEmail] =useState("")
    const [fecha, setFecha] =useState("")
    const [sintomas, setSintomas] =useState("")

    const[error,setError] = useState(false)


    useEffect(()=>{
        if(Object.keys(paciente).length>0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId=() => {
        const random = Math.random().toString().substring(2)
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const handleSubmit= (e) =>{
        e.preventDefault();

        //Validacion de Formulario

        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setError(true)
        return;
        } 
        setError(false)

        //Objetos de pacientes
        const objetoPacientes ={
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id){
            //Editando registro
            objetoPacientes.id=paciente.id
                // Busco por id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id
                //devuelve el nuevo , caso contrario devuelve el anterior
                 ?objetoPacientes :pacienteState)
            setPacientes(pacientesActualizados)

            //limpio la variable
            setPaciente({})
        } else {
            //Nuevo registro
            objetoPacientes.id=generarId()
            setPacientes([...pacientes, objetoPacientes])
        }
        

        //reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    } 

    return (
        <div className='md:w-1/2 lg:w-2/5 mr-5'>
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className='text-center mt-5 text-xl mb-10 '> Añadir pacientes 
                    <span className="text-indigo-600 font-bold"> administralos</span>
                </p>
                
            <form onSubmit={handleSubmit}
            className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10 ml-10 ' >
                {error && <Error>Todos los campos son obligatorios</Error>}
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
                        Fecha de los Sintomas
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

                <input type="submit" 
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'></input>
            </form>
        </div>
    )
}

export default Formulario
