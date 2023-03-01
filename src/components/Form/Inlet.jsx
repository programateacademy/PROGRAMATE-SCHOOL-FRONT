import React from 'react'

const Input = ({ state, modifyStatus, type, label, placeholder, id, error, question, funcion  }) => {
    
    const onChange = (e) => {
        modifyStatus({...state, camp: e.target.value });
    }

    const validation = () => {
        if (question) {
            if (question.test(state.camp)) {
                modifyStatus({ ...state, valid: 'true' })
            } else {
                modifyStatus({ ...state, valid: 'false' });
            }
        }
        if (funcion) {
            funcion();
        }
    }
    return (
        <div className='w-80 mx-7 pb-6'>
            <label
                className='pb-1.5 text-dark text-sm font-Nunito font-black' htmlFor={id}
                validated={state.validated}
            >{label}</label>
            <div>
                <input
                    className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins outline-none'
                    type={type}
                    placeholder={placeholder}
                    id={id} 
                    value={state.camp}
                    onChange={onChange} 
                    onKeyUp={validation}
                    onBlur={validation}
                    validation={state.validated}
                    />
            </div>
            <p validated={state.validated}>{error}</p>
        </div>
    )
}

export default Input
