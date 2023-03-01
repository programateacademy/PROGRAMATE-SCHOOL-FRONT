import {React, useState} from 'react'
import Inlet from './Inlet'
import { Link } from 'react-router-dom';


const Residence = () => {
    
    const [rural, modifyRural] = useState(false);
    const [addressStudent, modifyAddressStudent] = useState({ camp: '', valid: null });
    
    const questions = {
        addressStudent: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    
    const onChangeRural = (e) => {
        modifyRural(e.target.checked)
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     if(
    //         addressStudent.valid == 'true' &&
    //     ){
    //         modifyAddressStudent({ camp: '', valid: '' });
    //     };
    // }

    return (
        <div >
            <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full'></img>
            <Link to='/Social'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link> 
            <Inlet
                state={addressStudent}
                modifyState={modifyAddressStudent}
                type="text"
                label="Dirección permanente / recurrente de residencia"
                placeholder="Dirección permanente / recurrente de residencia"
                id="addressStudent"
                error="ingresa tu dirección permanente / recurrente de residencia"
                question={questions.addressStudent}
            />
            
            <div className='w-80 mx-7 pb-6'>
                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</h3>
                <select id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                    <option className='font-medium text-dark'>Selecciona una opción</option>
                    <option className='font-medium text-dark'>Atlántico</option>
                    <option className='font-medium text-dark'>Bogotá</option>
                    <option className='font-medium text-dark'>Magdalena</option>
                    <option className='font-medium text-dark'>Tolima</option>
                </select>
            </div>

            <div className='w-80 mx-7 pb-6'>
                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tu residencia se encuentra en el área rural de tu Departamento?</h3>
                <section className='flex flex-col gap-2 ' >
                    <div className='flex flex-row '>
                        <input
                            className='w-4 h-4 accent-yellow '
                            type="checkbox"
                            id="rural"
                            name='rural'
                            checked={rural}
                            onChange={onChangeRural}
                            value={"si"}
                        ></input>
                        <label className='ml-2 text-center text-dark text-sm font-Nunito'>Si</label>
                    </div>

                    <div className=' flex flex-row'>
                        <input
                            className='w-4 h-4 accent-yellow '
                            
                            type="checkbox"
                            id="rural"
                            name='rural'
                            checked={rural}
                            onChange={onChangeRural}
                            value={"no"}
                        ></input>
                        <label className='ml-2 text-center text-dark text-sm font-Nunito'>No</label>
                    </div>
                </section>    
            </div>

            <div className='w-80 mx-7 pb-6'>
                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Si tu lugar de residencia es Bogotá, ¿Cuál es la localidad de residencia?</h3>
                <select id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                    <option className='font-medium text-dark'>Ninguna</option>
                    <option className='font-medium text-dark'>localidad de Antonio Nariño</option>
                    <option className='font-medium text-dark'>localidad de Barrios Unidos</option>
                    <option className='font-medium text-dark'>localidad de Bosa</option>
                    <option className='font-medium text-dark'>localidad de Chapinero</option>
                    <option className='font-medium text-dark'>localidad de Ciudad Bolívar</option>
                    <option className='font-medium text-dark'>localidad de Engativá</option>
                    <option className='font-medium text-dark'>localidad de Fontibón</option>
                    <option className='font-medium text-dark'>localidad de Kennedy</option>
                    <option className='font-medium text-dark'>localidad de La Candelaría</option>
                    <option className='font-medium text-dark'>localidad de Los Mártires</option>
                    <option className='font-medium text-dark'>localidad de Puente Aranda</option>
                    <option className='font-medium text-dark'>localidad de Rafael Uribe Uribe</option>
                </select>
            </div>

            <Link className='flex justify-end' to='/Guardian'>
                <button type='submit' disabled="" className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
            </Link> 
        </div>
    )
}

export default Residence