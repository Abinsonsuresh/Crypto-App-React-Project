import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { userAuth } from '../context/AuthContext'

const SavedCoin = () => {

    const [coins, setCoins] = useState([]);
    const { user } = userAuth();

    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setCoins(doc.data()?.watchList);
      });
    }, [user?.email]);

    const coinPath = doc(db, 'users', `${user?.email}`);

  
  return (
    <>
    <div>
        {
        
        coins.length === 0 ? (<p>Oops you don't have any saved coins <Link to='/'>Search coins</Link></p> ): (
            <table className='w-full text-center'>
                <thead>
                    <tr className='border-b'>
                        <th className='px-4'>Rank #</th>
                        <th className='text-left'>Coin</th>
                        <th className='text-left'>Remove</th>

                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin)=>(
                        <tr key={coin.id} className='h-[60px] overflow-hidden'>
                            <td>{coin?.rank}</td>
                            <td><Link to={'/coins/${coin.id'}></Link>
                            <div>
                                <img src={coin?.image} className='w-8' alt="/" />
                                <div>
                                    <p>{coin?.name}</p>
                                    <p>{coin?.symbol}</p>

                                </div>
                                </div>
                                </td>
                                <td>
                                    <AiOutlineClose/>
                                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
        }
    </div>
    </>
  )
}

export default SavedCoin