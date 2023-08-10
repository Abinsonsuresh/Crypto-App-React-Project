import React, { useState } from 'react'
import CoinItem from './CoinItem'


const CoinSearch = ({coins}) => {
  console.log(coins)
  const [search , setSearch] = useState('')
  return (
    <>
      <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-center p-4'>
        <h1>Search Crypto</h1>
        <form >
          <input type="text" placeholder='search coins' 
          onChange={(event)=>{
            setSearch(event.target.value)
          }}/>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
         {coins.filter((value)=>{
          if(search=== '')
          {
            return value;
          }
          else if(value.name.toLowerCase().includes(search.toLocaleLowerCase()))
          {
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