
import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import timeImage from './assets/time.png'
import fireImage from  './assets/fire.png'
import { useEffect, useState } from 'react'




function App() {
  const[reciepies, setReciepies] = useState([])
  
  useEffect(()=>{
    fetch("../public/fakeData.json")
    .then(res => res.json())
    .then(data => {setReciepies(data)})
  },[])
console.log(reciepies)
  return (
    <>
     <Header></Header>
     <Banner></Banner>

     <div className="main-container flex flex-col lg:flex-row md:flex-row gap-5">
      {/* card */}
       <div className="flex flex-col md:flex-row  lg:flex-row justify-around gap-3 ">

       <div className="card w-96  bg-base-100 shadow-xl border border-gray-500 ">
  <figure className="">
    <img className='w-full rounded-3xl' src="https://i.ibb.co/QvngMgR/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg" alt="Shoes" />
  </figure>
  <div className="mt-4 ">
    <h2 className="card-title text-[#282828] font-lexend text-xl font-semibold">Spaghetti Bolognese</h2>
    <p className="mt-2 text-[#878787] font-lexend text-left">Classic Italian pasta dish with savory meat sauce.</p>
    <div className='border h-0 border-gray-400 mt-4 '></div>
    <div className="mt-4 text-left font-lexend ">

 
      <h1 className='text-[#282828] text-lg font-bold mb-2'> Ingredients: 6 </h1>
      <ul>
        <li className='#878787'>500g ground beef</li>
      </ul>
      </div>
      <div className='border h-0 border-gray-400 mt-4 '></div>
     <div className='mt-4 flex  gap-5'>
      <div className='flex '><img src={timeImage} alt="" /> <p className='ml-2'>Minutes</p></div>
      <div className='flex '><img src={fireImage} alt="" /> <p className='ml-2'>600 calories</p></div>
     </div>
     <div className='text-left mt-4'>
     <button className="btn text-xl font-lexend  btn-success hover:bg-green-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Wait to Cook</button>
     </div>
    </div>
 
</div>



       </div>


{/* cart */}

       <div className="card w-full cart-container  flex-grow  shadow-xl border border-gray-400  rounded-3xl">
  <div className="p-8 ">
    <h2 className=" text-center">Card title!</h2>
  
    
  </div>
</div>
       </div>

     
     
    </>
  )
}

export default App
