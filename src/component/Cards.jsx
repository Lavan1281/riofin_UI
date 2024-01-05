export default function Cards(){
    return(
      <div className="bg-white pb-20" id='image-container'>
        <div className="grid grid-cols-2 gap-4 pt-5">
          <div className='bg-white h-full'>
            <h2 className='text-5xl text-black font-bold pl-8 pb-5'>Our Current <br />Projects</h2>
            <hr className="border-t-2 border-green-400 w-2/5  "/>
            <p className='text-blue-600 text-xl pl-8'>Funding is filling fast</p>
            <p className='text-blue-900 text-xl pl-8 font-semibold'>Higher returns on the go</p>
          </div>
          <div className='bg-white h-full boxshadow' id='image-text' >
            <img src={require('./img10.jpg')} alt="" id="image2" className= ' pr-80  bg-black'/>

            <div id='container-text'>
            <p className='text10 mb-5 -mt-10 p-1 font-semibold ml-20 mr-32'>Captial Protected</p>
            <p className='text11 mb-5 -mt-11 p-1 font-semibold ml-52 mr-32'>Trending</p>
           <p className='text1 mt-8 '>Real estate</p>
           <h3 className='text-2xl font-semibold  mt-1'>CRE - II</h3>
           <h5 className='text20 '>Mappedu</h5>
           <h3 className='text-2xl font-semibold mt-2'>1.2 Crore</h3>
           <p className='text1 mt-1'>Raised</p>
            <div className='nav1 flex mt-2 text5'>
           <ul className='flex space-x-4'>
            <li className='text-blue-500'>DESCRIPTION</li>
            <li>NEAR BY</li>
            <li>MAP</li>
           </ul>
          
           </div>
           <hr className=' w-3/5 mt-1  text5'/>
           <p className='text4'>Commerical warehouse located in the prime location of Sriperumbudur. Waiting to be fully <br />funded... <span className='text-blue-700'>read more</span></p>
           <div className='flex text-xs'>
              <ul className=' flex space-x-14 pl-2 mt-2'>
                <li className='px-2'>ROI %</li>
                <li className='px-1'>TENURE</li>
                <li className='px-0'>MIN INVESTING</li>
              </ul>
            </div>
            <div className='flex text-xs mt-2'>
              <ul className=' flex space-x-14 pt-2 border-gray-500  '>
                <li className=' bg-gray-700  px-4 rounded-xl  p-1'>18% PA</li>
                <li className=' bg-gray-700 px-4 p-1 rounded-xl'>4 Yr</li>
                <li className=' bg-gray-700 px-4   p-1 rounded-xl'> 1 Lakh</li>
              </ul>
            </div>
            <div className='btn'>
              <button className='btn1 px-24 mt-3 mb-4 ml-4 p-1  font-semibold text-center'>INVEST NOW</button>
              
            </div>
            <div><button className='btn2 px-24 pr-24 ml-5 p-1 text-black  font-bold text-center'>&nbsp;TALK TO US</button></div>
            </div>

            
          </div>

        </div>
      </div>
    )
}