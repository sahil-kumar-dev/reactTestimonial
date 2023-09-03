import { React, useEffect, useState } from 'react'
import Datas from './Datas'
import Cards from './Cards';

function Testimonials() {
    const [index, setindex] = useState(0)

    function next() {
        if (index === Datas.length - 1) {
            setindex(0)
        }
        else {
            setindex(index + 1);
        }
    }

    function previous() {
        if (index === 0) {
            setindex(Datas.length - 1);
        }
        else {
            setindex(index - 1);
        }
        clearInterval(suffle)
    }

    function suffle() {
        if (index === Datas.length - 1) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }
    }
    useEffect(() => {
        const intervalId = setInterval(suffle, 4000);
        return () => clearInterval(intervalId)
    }, [index])

    return (
        <div className='w-1/2 '>
            <h1 className='text-center font-bold text-5xl py-8'>Our Team</h1>
            <Cards data={Datas[index]} prev={previous} next={next} />
        </div>
        
    )
}

export default Testimonials;