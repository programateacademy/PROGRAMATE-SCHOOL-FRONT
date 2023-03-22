import React, { useState, useEffect } from 'react'
import defaultApi from '../../apis/index'
import { BarChart, Bar, PieChart, Pie, Tooltip, Legend, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Sector, Cell, LabelList, Label } from 'recharts'

const Statistics = () => {

    const [dataStats, setDataStats] = useState('');
    
    useEffect(() => {
        defaultApi
            .get("getStatistics")
            .then(res => {
                console.log(res.data)
                setDataStats(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        })
        
        const Total = dataStats.Total
        const PercentF = dataStats.Female
        const PercentM = dataStats.Male
        const Stratum1 = dataStats.Stratum1
        const Stratum2 = dataStats.Stratum2
        const Stratum3 = dataStats.Stratum3
        const Stratum4 = dataStats.Stratum4
        const Stratum5 = dataStats.Stratum5
        const Stratum6 = dataStats.Stratum6
        const DepAtlant = dataStats.DepAtlant
        const DepBog = dataStats.DepBog
        const DepMag = dataStats.DepMag
        const DepTol = dataStats.DEpTol 

        const PercFemale = Math.round(PercentF*100)
        const PercMale = Math.round(PercentM*100)

        //PIE GRAPH 01
        const  dataPie01 = [
            {gender: 'Femenino', value: PercFemale},
            {gender: 'Masculino', value: PercMale},
        ]

        const colorsPie01 = ['#b1b11a', '#d659ee']

        //BAR GRAPH 01
        const dataBar01 = [
            {department: 'Atlántico', inscritos: DepAtlant},
            {department: 'Bogotá', inscritos: DepBog},
            {department: 'Magdalena', inscritos: DepMag},
            {department: 'Tolima', inscritos: DepTol},
        ]

        //BAR GRAPH 02
        const dataBar02 = [
            {stratum: 'Estrato 1', inscritos: Stratum1},
            {stratum: 'Estrato 2', inscritos: Stratum2},
            {stratum: 'Estrato 3', inscritos: Stratum3},
            {stratum: 'Estrato 4', inscritos: Stratum4},
            {stratum: 'Estrato 5', inscritos: Stratum5},
            {stratum: 'Estrato 6', inscritos: Stratum6},
        ]

    return (
        <div>
            
            {/* Header */}        
            <section className='md:pl-4 grid grid-row-2 md:grid-cols text-dark'>
                <h1 className='my-4 font-bold text-xl text-center md:text-left font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Estadísticas de las convocatorias
                </h1>
            </section>

            {/* Table */}
            <section className=''>
                <br/>
                                
                    {/* PIE GRAPH 01 */}
            <div style={{ width: '100%', height: 400}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            dateKey="value"
                            data={dataPie01}
                            innerRadius={2}
                            outerRadius={95}
                            nameKey="gender"
                            legendType='circle'
                            
                        >
                            {dataPie01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorsPie01[index % colorsPie01.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign='top' height={20} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            


            {/* BAR GRAPH 01 */}
            <ResponsiveContainer width="80%" aspect={2}>
                <BarChart
                    data={dataBar01}
                    width={600}
                    height={300}
                    margin={{top:10, right: 15, left: 15, bottom: 10}}    
                >
                <CartesianGrid strokeDasharray="3, 3" />
                <XAxis dataKey="department"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inscritos" fill="#0e8522"/>
                </BarChart>
            </ResponsiveContainer>

            {/* BAR GRAPH 02 */}
            <ResponsiveContainer width="80%" aspect={2}>
                <BarChart
                    data={dataBar02}
                    width={600}
                    height={300}
                    margin={{top:10, right: 15, left: 15, bottom: 10}}    
                >
                <CartesianGrid strokeDasharray="3, 3" />
                <XAxis dataKey="stratum"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inscritos" fill="#fd419f"/>
                </BarChart>
            </ResponsiveContainer>

                <br/>
                    {/* <p>{Total}</p> 
                    <p>{PercentF}</p>                   
                    <p>{PercentM}</p>
                    <p>{Stratum1}</p>
                    <p>{Stratum2}</p>
                    <p>{Stratum3}</p>          
                    <p>{Stratum4}</p>
                    <p>{Stratum5}</p>
                    <p>{Stratum6}</p>
                    <p>{DepAtlant}</p>
                    <p>{DepBog}</p>
                    <p>{DepMag}</p>                  
                    <p>{DepTol}</p>
                    <p>{PercFemale}</p>
                    <p>{PercMale}</p> */}
            
                <br/>
                    
                <br/>

                <br/>
            </section>
        </div>
    )
}

export default Statistics