
import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'

import { useEffect, useState } from 'react'
import Recipies from './Component/Recipies/Recipies'




function App() {
  const[reciepies, setReciepies] = useState([]);
  const [cart,setCart] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const totalPreparingTime = deletedItems.reduce((total, item) => total + parseFloat(item.preparing_time), 0);
  const totalCalories = deletedItems.reduce((total, item) => total + parseFloat(item.calories), 0);

  
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => {setReciepies(data)})
  },[])

  const handleCart =(p) => {
    const isExist = cart.find(rp => rp.recipe_id == p.recipe_id)
   if(!isExist){
    setCart([...cart,p])
   }
   else{
   alert("already in card")
   }
  }
  const handleDelete=(id)=> {
    const deletedItem = cart.find(item => item.recipe_id === id);
    const newcart = cart.filter(item=>item.recipe_id != id);
    setCart(newcart)
    setDeletedItems(prevItems => [...prevItems, deletedItem]);
  }

  return (
    <>
     <Header></Header>
     <Banner></Banner>

     <div className="main-container flex justify-around h-full gap-3 ">
      {/* card */}
      <div>
      <div className="card-container w-full grid grid-cols-2 gap-2 ">
      
      {
          reciepies.map(rp => <Recipies 
            key={rp.recipe_id}
            handleCart={handleCart}
          recipe={rp}
         
          ></Recipies>)
          
        }
       
       
</div>
</div>

{/* cart */}


       <div className=" w-auto h-auto card  cart-container shadow-xl border border-gray-400  rounded-3xl">
  <div className="p-8 ">
    <h2 className=" text-center text-2xl font-lexend font-bold">Want To Cook :{cart.length}</h2>
    <div className='border h-0 border-gray-400 mt-4 '></div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
        {
cart.map((item, index) => (
      
    
    
      <tr key={index} className="hover">
        <th>{item.recipe_id}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <td><button onClick={()=>handleDelete(item.recipe_id)} className='btn hover:bg-green-900 bg-green-500 border-none text-black rounded-full'>Preparing</button></td>
      </tr>
      ))
   
  }
      
    </tbody>
  </table>
</div>
{/* current item */}
<div className='mt-8'>
<h2 className=" text-center text-xl font-lexend font-bold">Currently Cooking:{deletedItems.length}</h2>
<div className='border h-0 border-gray-400 mt-4 '></div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
    {deletedItems.map((item, index) => (
          <tr key={index} className="hover">
          <th>{item.recipe_id}</th>
          <td>{item.recipe_name}</td>
          <td>{item.preparing_time}</td>
          <td>{item.calories}</td>
          </tr>
          
        ))}
       
       <tr>
  <th colSpan="4">Total Preparing Time :</th>
  
  <td >{totalPreparingTime}miniute</td>
</tr>

<tr>
  <th colSpan="3">Total Calories :</th>
  <td></td>
  <td colSpan="">{totalCalories} Calories</td>
</tr>
    
      </tbody>
      </table>
      </div>
      <ul>
        
      </ul>
</div>
  
    
  </div>
</div>


       </div>

    
     
    </>
  )
}

export default App
