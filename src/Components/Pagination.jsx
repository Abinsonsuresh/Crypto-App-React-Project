import React from 'react'

const Pagination = ({totalpost,postperpage, setCurrentpage, currentpage}) => {
    let pages = []
    for(let i =1 ; i<= Math.ceil(totalpost/postperpage); i++)
    {
        pages.push(i)
    }
  return (
    <div>
        <div className='flex flex-wrap justify-center space-x-3  my-4 '>
        <button onClick={()=>{setCurrentpage(currentpage - 1)}}  className=' px-3 py-2  border border-white shadow-lg'>Prev</button>    
      {  pages.map((page, index) => {
            return(
                <button onClick={()=>{setCurrentpage(page)}} className=' px-3 py-2  border border-white shadow-lg' key={index}>{page}</button>    
                
                )
            })}
        <button onClick={()=>{setCurrentpage(currentpage + 1)}} className=' px-3 py-2  border border-white shadow-lg'>Next</button>    

            </div>
    </div>
  )
}

export default Pagination