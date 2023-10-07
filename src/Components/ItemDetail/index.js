import React from 'react'

const ItemDetail = () => {
  return (
    <div className='container'>
      <div className='detail'>
        <img className='detail-img' src={data.image}/>
        <div className='content'>
            <h1>{data.Producto}</h1>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
