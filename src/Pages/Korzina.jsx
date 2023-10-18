
import React, { useEffect, useState } from 'react'
import Header_for from '../Components/Heder_for_korzina';
import lavash from '/lavash.jpg'


const Korzina = () => {

    var allData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const data = JSON.parse(value);
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        allData.push(element)
      }
    }

    var one = []
    function removeOne(id) {
      console.log(id);
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const data = JSON.parse(value);
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          console.log(element,"elemeen");
          if (element.id === id) {
              element.count === 3
              console.log(element.count);
              // window.location.reload()
          }
        }
      }
      
    }

    function removeAll() {
        localStorage.clear()
        window.location.reload()
    }


  return (
    <>
      <Header_for/>
        <div>

        <div class="modal-body">
        {allData?.map(({id, title,img,count,price },index) => (
                <div  key={index} className='d-flex border justify-content-around'>
                    <div>
                        <img width={100} src={lavash} alt="" />
                    </div>
                    <div className='my-3 w-50'>
                        <h5>{title}</h5>
                        <p>{count}<small>ta</small></p>
                    </div>
                    <div className='my-3'>
            
                        <button onClick={() => removeOne(id)} className="btn"><i class="fa-solid fa-delete-left color-primary"></i></button>
                       <button className="btn"><i className="fa-solid mx-1 my-3 trash  fa-trash"></i></button>
                      </div>
                    </div>
          
       ))} 

            </div>
            <button onClick={() => removeAll()} className="btn btn-danger w-100 mt-3">Claer</button>
        </div>
    </>
  )
}

export default Korzina
