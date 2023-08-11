import React, { useState } from 'react'
import CoinItem from './CoinItem'


const CoinSearch = ({coins}) => {
  console.log(coins)
  const [search , setSearch] = useState('')
  return (
    <>
      <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
        <h1>Search Crypto</h1>
        <form >
          <input type="text" placeholder='search coins' 
          onChange={(event)=>{
            setSearch(event.target.value)
          }}/>
        </form>
      </div>

      <table className='w-full border-collapse text-center '>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden md:table-cell'>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
         {coins.filter((value)=>{
          if(search === '')
          {
            //it will return any content that is related to any of the letter in search
            return value;
          }
          else if(value.name.toLowerCase().includes(search.toLocaleLowerCase()))
          {
            //it will return values similar to search
            return value;
          }
         }).map((CoinsFetched)=>{
          return(
              <CoinItem key={CoinsFetched.id} coin = {CoinsFetched} />
          )
         })}
        </tbody>
      </table>
      
      </div>

    </>
  )
}

export default CoinSearch