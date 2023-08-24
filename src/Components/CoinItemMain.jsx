import React, { useState }  from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { userAuth } from '../context/AuthContext';
// import { useCoinContext } from '../context/CoinAPI'

const CoinItemMain = ({coin, currency}) => {
          const { market_cap_rank, id, name, image, current_price, symbol, price_change_24h, total_volume, market_cap, price_change_percentage_24h, sparkline_in_7d } = coin
          const [savedCoin, setSavedCoin] = useState(false);


          const { user } = userAuth();
          const setsave = () => { setSavedCoin(true) }
        
          const coinPath = doc(db, 'users', `${user?.email}`);
          const saveCoin = async () => {
            if (user?.email) {
              setSavedCoin(true);
              await updateDoc(coinPath, {
        
                watchList: arrayUnion({
                    id: coin.id,
                    name: coin.name,
                    image: coin.image,
                    rank: coin.market_cap_rank,
                    symbol: coin.symbol,
                    price: coin.current_price.toLocaleString(),   
                }),
              });
            } else {
              alert('Sign in before you save a coin to your watch list');
            }
          };
        
       return (
        
        <tr key={coin.id} className='h-[80px] w-full border-b overflow-hidden '>

          <td onClick={saveCoin} >
            {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
          </td>

          <td>{market_cap_rank}</td>
          <td>
            <Link to={`/coins/${id}`}>
              <div className='flex items-center'>
                <img className='w-6 mr-2 rounded-full' src={image} alt="" />
                <p className='hidden sm:table-cell'>{name}</p>
              </div>
              </Link>         
          </td>
    
          <td> <Link to={`/market/${id}`}>{symbol.toUpperCase()}</Link></td>

          <td>{currency === 'inr' ? (<p>₹{current_price.toLocaleString()}</p>) : (<p>${current_price.toLocaleString()}</p>)}</td>
          <td>{price_change_percentage_24h > 0 ? (<p className='text-green-500'>{price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='text-red-500'>{price_change_percentage_24h.toFixed(2)}%</p>)}</td>
          <td className='w-[180px] hidden md:table-cell'>{ currency === 'inr'? (<p>₹{total_volume.toLocaleString()}</p>) : (<p>${total_volume.toLocaleString()}</p>)}</td>
          <td className='w-[180px] hidden md:table-cell'>{ currency === 'inr'  ? (<p>₹{market_cap.toLocaleString()}</p>) : (<p>${market_cap.toLocaleString()}</p>)}</td>
          <td>
            <Sparklines data={sparkline_in_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </td>
         

        </tr>
     
  )
}

export default CoinItemMain