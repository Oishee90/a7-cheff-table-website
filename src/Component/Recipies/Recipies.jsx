
import PropTypes from 'prop-types';
import timeImage from '../../assets/time.png'
import fireImage from  '../../assets/fire.png'

const Recipies = ({recipe,  handleCart}) => {
  console.log(handleCart)
   
    return (
     
        <div className="card w-auto  border-green-200 shadow-xl border bg-base-100 ">
  <figure className="">
    <img className='w-full rounded-3xl' src={recipe.image} alt="Shoes" />
  </figure>
  <div className="mt-4 ">
    <h2 className="card-title text-[#282828] font-lexend text-xl font-semibold">{recipe.recipe_name}</h2>
    <p className="mt-2 text-[#878787] font-lexend text-left">{recipe.short_description}</p>
    <div className='border h-0 border-gray-400 mt-4 '></div>
    <div className="mt-4 text-left font-lexend ">

 
      <h1 className='text-[#282828] text-lg font-bold mb-2'> Ingredients: {recipe.ingredients.length}</h1>
      
      {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>))
      }
     
      </div>
      <div className='border h-0 border-gray-400 mt-4 '></div>
     <div className='mt-4 flex  gap-5'>
      <div className='flex '><img src={timeImage} alt="" /> <p className='ml-2'>{recipe.preparing_time}</p></div>
      <div className='flex '><img src={fireImage} alt="" /> <p className='ml-2'>{recipe.calories}</p></div>
     </div>
     <div className='text-left mt-4'>
     <button onClick={()=> handleCart(recipe)} className="btn text-xl font-lexend  btn-success hover:bg-green-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Want To Cook</button>
     </div>
    </div>
    </div>


    );
};

Recipies.propTypes = {
 recipe: PropTypes.object.isRequired,
 handleCart : PropTypes.func

};

export default Recipies;