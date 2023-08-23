import React from 'react'

const ExchangeItem = ({exdata}) => {
  return (
    <tr key={exdata.id} className='h-[80px] w-full border-b overflow-hidden '>
        <td></td>

        <td>
            <div>
            <p>{exdata.name}</p>
            <img src={exdata.image} className='w-6' alt="" /> 
            </div>
            </td>

            <td></td>
  </tr>
  )
}

export default ExchangeItem