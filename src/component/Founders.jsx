export default function Founders(){
    return(
        <div className="bg-white p-10"> 
            <div className="text-black">
                <h1 className='text-black text-center text-4xl font-bold'>Meet Our Founders</h1>
                <hr className="border-t-4 border-green-500 w-1/4 mx-96 pr-96 p-2"/>


            </div>
            <div className='flex'>
                <div className='flex space-x-4'>
                <div className='grid grid-rows-2 '>
                    <div className='border w-[280px] h-[280px] p-2 rounded-xl justify-center items-center '>
                <div>
                <img src={require('./image 1.png')} alt="#" className=" w-34 h-34 rounded-full " />
                </div>
            <div className="flex ">
                <div className="flex space-x-4">
                <h2>VENKATESAN</h2>
                <h3>COO</h3>
                </div>
            </div>
            </div>
            </div>
            <div className='grid grid-rows-2 '>
                <div>
                <img src={require('./image 2.png')} alt="#" className=" w-34 h-34 rounded-full " />
                </div>
            <div className="flex">
                <div className="flex space-x-4">
                <h2>DHANASEKARAN</h2>
                <h3>CFO</h3>
                </div>
            </div>
            </div>
            <div className='grid grid-rows-2 '>
                <div>
                <img src={require('./image 3.png')} alt="#" className=" w-34 h-34 rounded-full " />
                </div>
            <div className="flex">
                <div className="flex space-x-4">
                <h2>BASKARAN</h2>
                <h3>CEO</h3>
                </div>
            </div>
            </div>
            

                </div>
            </div>

        </div>
    )
}