import React from 'react'
import Student from '../components/Form/Student'
import Social from '../components/Form/Social'
import Residence from '../components/Form/Residence'
import Guardian from '../components/Form/Guardian'
import Motivation from '../components/Form/Motivation'
import Logic from '../components/Form/Logic'
import Vocation from '../components/Form/Vocation'


function Form() {
    
    return (
        <div>
            <Student/>
            <Social/>
            {/* <Residence/> */}
            <Guardian/>
            <Vocation/>
            <Motivation/>
            <Logic/>
        </div>
    )
}

export default Form
