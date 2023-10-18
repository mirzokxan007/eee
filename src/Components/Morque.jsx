import React from 'react'
import '../App.css'
import cola from '/cola.png'
import pepsi from '/pepsi.png'
import lipton from '/liptons.png'
import fanta from '/fanta.png'



const Morque = () => {
  
  return (
    <div className='d-flex morwue my-3 justify-content-berween'>
        <img width={200} className='imgs ' src={cola} alt="" />
        <img width={200} className="imgs mx-3 mt-3 " src={pepsi} alt="" />
        <img width={130} className="imgs mx-3 mt-3 " src={fanta} alt="" />
        <img width={150} className="imgs mx-3 mt-3 " src={lipton} alt="" />
    </div>
  )
}

export default Morque
