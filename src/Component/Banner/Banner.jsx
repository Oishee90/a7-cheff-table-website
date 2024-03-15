import backgroundImage from '../../assets/banner-img.png'

const Banner = () => {
    return (
        <section className="banner mt-12 mx-4">
        <div className="container mx-auto h-full w-full ">
         <div className="hero min-h-screen bg-base-200 mt-12 "  style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: 'auto',
            height: 'auto',
            borderRadius: '20px',
           }}>
      <div className="hero-content text-center ">
        <div className="p-4 md:p-12 lg:p-12 lg:space-y-5 md:space-y-5">
          <h1 className="text-2xl md:text-2xl lg:text-5xl font-lexend font-bold text-[#FFFFFF]">Discover an exceptional cooking <br  /> class tailored for you!</h1>
          <p className="py-6 text-xs text-gray-300 font-lexend md:text-lg  lg:text-lg">Welcome to TastyTrails, where every dish is a magical journey.<br /> Step into a world of whimsical flavors and celestial cuisine where each bite is an enchanting experience.. </p>
          <div className='flex justify-center items-center gap-8'>
            <div className='font-lexend text-xs md:text-xl  lg:text-xl font-semibold text-[#150B2B]'>
              <button className="btn border-none btn-success hover:bg-green-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Explore Now</button></div>
            <div className='font-lexend text-xs md:text-xl  lg:text-xl font-semibold'>
              <button className="btn btn-outline  border-green-200 hover:bg-green-900 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full text-white">Our Feedback </button></div>
    
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="banner mt-12 mx-4 p-8">
      <div className='container mx-auto flex flex-col space-y-5'>
        <h1 className='text-4xl font-lexend  font-semibold text-[#150B2B]'>Our Recipes </h1>
        <p className='font-lexend text-base text-[#150B2B99]'>Welcome to Our Recipes,where culinary creativity meets tradition. Explore a world of tantalizing flavors and innovative dishes curated just for you, ensuring every meal is an unforgettable experience.</p>
      </div>
    </div>
    </section>
           

    );
};

export default Banner;