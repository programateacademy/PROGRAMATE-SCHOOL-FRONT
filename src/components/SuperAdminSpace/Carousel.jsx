import {React, useState} from 'react'

const Carousel = () => {
    const [value, setValue] = useState(0);

    const onChange = value => {
        setValue(value);
    }


    return (
    <div>

        {/* Search index */}
        <section className='w-full my-4 md:my-8 flex justify-center gap-2 md:gap-6 font-Poppins font-bold text-xl text-dark'>
                <button 
                value={value}
                onChange={onchange} className='bg-yellow shadow-md shadow-dark/50 rounded px-3 md:px-5 py-1'><HiChevronDoubleLeft className='md:scale-[1.5] mx-auto'/></button>
                <button 
                value={value}
                onChange={onchange}className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>1</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>2</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>3</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>...</button>
                <button className='bg-yellow shadow-md shadow-dark/50 rounded px-3 md:px-5 py-1'><HiChevronDoubleRight className='md:scale-[1.5] mx-auto'/></button>
            </section>
    </div>

    
    
)
}


export default Carousel