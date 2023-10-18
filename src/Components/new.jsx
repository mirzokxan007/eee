import React from 'react'

const j = () => {
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
      var { categoryname } = element
      if (categoryname === "Combo") {
        Combo.push(element)
        localStorage.setItem('combo', JSON.stringify(Combo));
      }else if( categoryname === "Lavash" ){
         Lavash.push(element)
         localStorage.setItem('lavash', JSON.stringify(Lavash));
      }else if( categoryname === "Hotdog" ){
        Hotdog.push(element)
        localStorage.setItem('hotdog', JSON.stringify(Hotdog));
      }else if( categoryname === "Gamburger" ){
        Gamburger.push(element)
        localStorage.setItem('gamburger', JSON.stringify(Gamburger));
      }else if( categoryname === "Pitsa" ){
        Pitsa.push(element)
        localStorage.setItem('pitsa', JSON.stringify(Pitsa));
      }else if( categoryname === "Souslar" ){
        Souslar.push(element)
        localStorage.setItem('pitsa', JSON.stringify(Souslar));
      }else if( categoryname === "Ichimliklar" ){
        Ichimliklar.push(element)
        localStorage.setItem('ichimliklar', JSON.stringify(Ichimliklar));
      }else if( categoryname === "Shourma" ){
        Shourma.push(element)
        localStorage.setItem('shourma', JSON.stringify(Shourma));
      }else if( categoryname === "Sendvish" ){
        Sendvish.push(element)
        localStorage.setItem('sendvich', JSON.stringify(Sendvish));
      }
    }
     return result
  }
  return (
    <div>
        <button onClick={() => additem(id)} className="btn-primary btn w-25 ">+</button>
        <p>{count}</p>
    </div>
  )
}

export default j
