export default function nation(){
    return(
<div className="bg-gradient-to-b from-violet-800 via-blue-700 to-violet-800 p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-20 ">
                <div>
                <h3 className="text-3xl text-green-400  font-bold p-2">Hi,</h3>
                <h2 className='text-5xl text-white font-bold p-2'>We have investors<br></br>across the </h2>
                <h1 className='text-6xl text-green-400 font-bold p-2'>Nation.</h1>
                <p className='text-2xl text-white p-2'>An extensive network of investors spread throughout <br></br>the country, encompassing diverse regions and<br></br> markets.</p>
                <h1 className='text-6xl text-white font-bold p-2'>3000<span className='text-6xl text-green-400'>+</span></h1>
                <h3 className='text-4xl text-green-400 font-bold p-3'>Smart Investors</h3>
            </div>
            <div className='w-fit'>
            <img src={require('./map-removebg-preview.png')} alt="" className=" w-fit mx-36   " />

            </div>
            </div>
        </div>
    )
}