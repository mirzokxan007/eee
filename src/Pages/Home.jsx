import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Morque from '../Components/Morque'
import Marquee from 'react-fast-marquee'
import lavash from '/lavash.jpg'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loader'
import { toast } from 'react-toastify'

const backURL = "https://api.render.com/deploy/srv-cknq2qm1101c738nau80?key=NRw4v0PZ0-Y"

const Home = () => {

  const [company, setCompany] = useState([]);
  async function send(title){
    await fetch(`${backURL}/lavash/get/${title}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
  
    })
    .then((res) => res.json())
    .then((data) => {
      setCompany(data)
        // console.log(data);
      })
    
  }


  const [category, setCategory] = useState([]);
  useEffect(() => {

    fetch(`https://bot-0q6s.onrender.com/category/get`, {
      method: "GET",
      headers: {
        'Copntent-Type': "application/json"
    }

    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
  }, []);

  // var count = 0

  var obj = []
   async function  additem(id){
    const filteredUsers =  company.filter(c => c.id === id);
    obj.push(filteredUsers)
    const flattenedArray = obj.flat();
    const countAndDataById = new Map();
    flattenedArray.forEach(obj => {
      const id = obj.id;
      const existingObj =  countAndDataById.get(id);
      if (existingObj) {
        existingObj.count++;
        if (obj.price) {
          existingObj.price += parseInt(obj.price);
        }
      } else {
        const newObj = { id: id, count: 1, title: obj.title, img: obj.img, categoryname: obj.categoryname };
        if (obj.price) {
          newObj.price = parseInt(obj.price);
        }
        countAndDataById.set(id, newObj);
      }
    });
    var Lavash = []
    var Combo = []
    var Hotdog = []
    var Gamburger = []
    var Pitsa = []
    var Souslar = []
    var Ichimliklar = []
    var Shourma = []
    var Sendvish = []
    var result = [...countAndDataById.values()];
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      var { categoryname,title,count } = element
      if (categoryname === "Combo") {       
        Combo.push(element)
        localStorage.setItem('combo', JSON.stringify(Combo));
        if (id === element.id) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Lavash" ){
         Lavash.push(element)
         localStorage.setItem('lavash', JSON.stringify(Lavash));
         if (id === element.id ) {
           toast(`${count}ta ${title} qoshildi`,{type:"success"});
         }
      }else if( categoryname === "Hotdog" ){
        Hotdog.push(element)
        localStorage.setItem('hotdog', JSON.stringify(Hotdog));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Gamburger" ){
        Gamburger.push(element)
        localStorage.setItem('gamburger', JSON.stringify(Gamburger));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Pitsa" ){
        Pitsa.push(element)
        localStorage.setItem('pitsa', JSON.stringify(Pitsa));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Souslar" ){
        Souslar.push(element)
        localStorage.setItem('souslar', JSON.stringify(Souslar));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Ichimliklar" ){
        Ichimliklar.push(element)
        localStorage.setItem('ichimliklar', JSON.stringify(Ichimliklar));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Shourma" ){
        Shourma.push(element)
        localStorage.setItem('shourma', JSON.stringify(Shourma));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }else if( categoryname === "Sendvish" ){
        Sendvish.push(element)
        localStorage.setItem('sendvich', JSON.stringify(Sendvish));
        if (id === element.id ) {
          toast(`${count}ta ${title} qoshildi`,{type:"success"});
        }
      }
    }
    const allData = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const data = JSON.parse(value);
      allData.push(data);
    }

    console.log(allData);

    

    let totalCount = 0;
    let totalPrice = 0

    allData.flat().forEach(item => {
      totalCount += item.count;
      if (item.price) {
        totalPrice += parseInt(item.price) * item.count;
      }})

      setTotalCount(totalCount)

    console.log("Total Count:", totalCount)
  }
  return (
    <>
    <div className='posits'>
      <Header/>
    </div>
    <div>
    <div className='morque_component '>
      <Marquee>
          <Morque/>
      </Marquee>
    </div>
    <div>
        <div className=" my-3 category container">
            <ul className='d-flex  cat py-3 justify-content-between'>
            {category?.map(({id, title },index) => (
                    <li onClick={() => send(title)} className='px-3 border mx-1 lis'>{title}</li>
              ))}
            </ul>
        </div>
    </div>
    <div className="cards container">
              {company?.length <= 0 ?<Loading/> :
            <div className="row  g-3">
            {company?.map(({id, title,img,price },index) => (
              <div  className="col-md-6 w-50  col-lg-3" >
              <div className="card lorem  rist" aria-hidden="true">

                <div className='count bg-danger'>
                  
                  </div>
                
                <img
                  height={160}
                  className="placeholder-card-image most_img card-img-top"
                  src={img}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{title}</h5>
                  <p className="card-text">
                  
                  </p>
                  <div className="w-100 mt-2">
                      <h4 className=' price text-center text-dark p-1'>{price}</h4>
                  </div>
                  <div className='d-flex justify-content-around'>
                    <button onClick={() => additem(id)} className="btn-primary btn w-100 ">Add to card</button>
                  </div>
                </div>
              </div>
            </div>
            ))}       
      </div>}
     
    </div>


    <footer className='fuuter my-3'>
        <div className='d-flex  justify-content-between container'>
            <div>
             <button className='btn  mx-3'></button>
            </div>
            <div className='d-felx  justify-content-between'>
                <button className='btn ' ><Link className='text-light text-none' to='/korzina'><i className="fa-solid basket mt-1  fa-2x fa-cart-shopping"></i></Link></button>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Home
