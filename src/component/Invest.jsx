export default function Invest(){
    return(
        <div>
            <div className="grid grid-cols-2 gap-2 bg-[#2272FF] pt-16 px-10 py-12">
                <div className=" text-white px-16">
                    <h1 className="text-3xl pb-4">How to Invest in <br />Riofin Assets</h1>
                    <hr className="border-t-2 border-green-500 w-2/4 -mx-2 pr-40 p-2"/>
                    
                    <div>
                        <p ><span className=" bg-white rounded-full  p-1 px-3 text-1xl font-semibold text-blue-800 mx-2">1</span ><span className=" text-xl font-semibold"> Create Account</span></p>
                        <p className="px-12 pt-2 p-5 text-1xl ">Create an account by clicking the sign up. <br />Enter your KYC details and verify.</p>
                    </div>
                    <div>
                        <p ><span className=" bg-white rounded-full  p-1 px-3 text-1xl font-semibold text-blue-800 mx-2">2</span ><span className=" text-xl font-semibold"> Choose The Project</span></p>
                        <p className="px-12 pt-2 p-5 text-1xl ">Select your preferred project in the  <br />opportunity section and click invest now.</p>
                    </div>
                    <div>
                        <p ><span className=" bg-white rounded-full  p-1 px-3 text-1xl font-semibold text-blue-800 mx-2">3</span ><span className=" text-xl font-semibold">Successfully Invested</span></p>
                        <p className="px-12 pt-2 p-5 text-1xl ">Now, pay through your perferred mode and that's<br />it now you are successfully invested in Riofin.</p>
                    </div>
                </div>
                <div >
                    <img src={require('./image5.png')} alt="" className='rounded-2xl boxshadow1'/>

                </div>

            </div>
        </div>
    )
}