export default function Deposit(){
    return(
      <div className='bg-black pt-10 pb-24 '>
        <div className="bg-black pt-10">
            <h1 className="justify-center px-80 mx-53 font-bold text-4xl text-white py-4 text-center">Why To Invest Beyond Tranditional Assets</h1>
            <h3  className="justify-center  px-80 mx-56 text-2xl text-white py-8 pt-4 text-center">Check Out The Pros & Cons</h3>
        </div>
        <div className="border border-gray-500 p-4 rounded-md bg-white mx-80 py-16 border-5 boxshadow">
  <ul className=" flex items-center  -mt-12 justify-center md:justify-evenly  border-2 border-gray-700 rounded-md shadow-black p-3 px-32">
    <li><a href="">Fixed Deposit</a></li>
    <li><a href="">Stock Market</a></li>
    <li><a href="">Gold</a></li>
    <li><a href="">Bonds</a></li>
  </ul>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 pt-4 ">
    <div className=" w-2/4 ">
      <img src={require('./authLeft.png')} alt="" className="  image1 shadow-black rounded-md shadow-lg mx-36   " />
    </div>
    <div className="text-sm">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 px-2">Fixed Deposit</h2>
      <p className="text-gray-700 p-2">Alternative investments offer higher returns, <br />diversification, inflation protection, tax advantages, and <br />access to unique opportunities compared to fixed deposits.</p>
      <p className="text-gray-700v p-2">Ranks high in providing safer returns</p>
      <p className="text-gray-700 p-2">Offers one of the lowest returns</p>
      <button className="mt-2 mx-2 text-1xl  bg-green-500 font-bold  text-black p-4 rounded-md hover:bg-green-500 border  border-gray-700  shadow-black">Get Started With Riofin</button>
    </div>
  </div>
</div>

      
        </div>


    )
}


