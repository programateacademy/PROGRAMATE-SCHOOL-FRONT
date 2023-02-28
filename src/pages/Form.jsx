import React from 'react'
import Student from '../components/Form/Student'
import Social from '../components/Form/Social'
import Residence from '../components/Form/Residence'
import Guardian from '../components/Form/Guardian'
import Psychological from '../components/Form/Psychological'
import Interest from '../components/Form/Interest'
import Logic from '../components/Form/Logic'


function Form() {
    
    return (
        <div>
            <Student/>
            <Social/>
            <Residence/>
            <Guardian/>
            <Psychological/>
            <Interest/>
            <Logic/>
        </div>
    )
}

export default Form
