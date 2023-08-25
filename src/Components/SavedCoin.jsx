import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { userAuth } from '../context/AuthContext'
import { useMarketContext } from '../context/MarketContext'

const SavedCoin = () => {
    const {currency } = useMarketContext()

    const [coins, setCoins] = useState([]);
    const { user } = userAuth();
    const {navigate} = useNavigate()

    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setCoins(doc.data()?.watchList);
      });
    }, [user?.email]);

    const coinPath = doc(db, 'users', `${user?.email}`);

    const RemoveCoin = async(passedid)=>{
        try{
            const result = coins.filter((item)=> item.id != passedid)
            await updateDoc(coinPath, {watchList: result})
        }
        catch(e){
            console.log(e.message)
        }
    }

//   let a 
  return (
    <>
    <div>
        {
        
          coins.length == 0 ? (<p>Oops you don't have any saved coins </p> ): (
            <div>
                <div className='flex flex-wrap gap-5 items-center justify-center '>
                    {
                        coins.map((coin)=>(
                            <div key={coin.id}>
                    
                            <div className='relative w-40 h-40 border border-secondary rounded-2xl shadow-xl bg-primary flex justify-center p-4 overflow-hidden hover:scale-105' >
                            <div className='absolute top-0 right-2 p-2  cursor-pointer rounded-3xl '>
                            <AiOutlineClose size={20} className='hover:text-red-500' onClick={()=>RemoveCoin(coin.id)}/>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                                <img src={coin?.image} className='w-12' alt="/" />
                                    {/* <p>{coin?.name}</p> */}
                                    <p className='font-semibold'>{coin?.symbol.toUpperCase()}</p>
                                    <div className='font-semibold'>{coin?.price}</div>
                                </div>
                                </div>
                                
                            </div>
                        ))
                    }
                      
                </div>
           
            </div>
        )
    }
    </div>
    <div className='flex items-center justify-center py-8'>
        {/* {
            coins.length === 0 ? (<button className='border border-input px-2 py-2 rounded-lg shadow-2xl bg-button text-btnText ml-4 font-semibold hover:scale-105'><Link to='/'>Search coins</Link></button>) :(<button className='border border-input px-2 py-2 rounded-lg shadow-2xl bg-button text-btnText ml-4 font-semibold hover:scale-105'><Link to='/'>Add more</Link></button>)

        } */}
        </div>
    
    </>
  )
}

export default SavedCoin