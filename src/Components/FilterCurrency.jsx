import React, { useState } from 'react'
import { useMarketContext } from '../context/MarketContext';
import {MdFilterList} from 'react-icons/md'


const filter = () => {
    const {currency, setCurrency } = useMarketContext();
    const [showFilter, setShowFilter] = useState(false)
    const showFil =()=>{
        setShowFilter(!showFilter)
    }

    return (
        <>
            <div onClick={showFil} className='mx-auto max-w-[1380px] cursor-pointer flex justify-end my-3'>
                <MdFilterList size={25} />
            </div>
            <div className={showFilter ? ' rounded-div cursor-pointer flex justify-end my-3 py-6' : ' rounded-div cursor-pointer hidden justify-end my-3 py-6'}>
                <button onClick={() => setCurrency('inr')} className='px-4 py-2 bg-button text-btnText mr-3 rounded-2xl shadow-2xl'>INR</button>
                <button onClick={() => setCurrency('usd')} className='px-4 py-2 bg-button text-btnText mr-3 rounded-2xl shadow-2xl'>USD</button>
            </div>
        </>
    )
}

export default filter