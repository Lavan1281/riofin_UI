import andrewImage from './img1.jpg';
export default function Banner() {
    const backgroundImageStyle = {
        backgroundImage: `url("${andrewImage}")`, backgroundSize:"cover", backgroundColor: "rgba(255, 255, 255, 0.5)",opacity: 0.9,
    }  
    return (

        <div>
            <div className="py-10 px-10" style={backgroundImageStyle }>
                {/* <img src={require('../images/andrew-jephson-r4PbOL-LUbs-unsplash.jpg')} alt="/" class=" w-full h-full" /> */}
                <h4 className="text-2xl py-2  text-white font-bold">Welcome! The Future Awaits You</h4>
                <h2 className="text-6xl py-2  text-white font-extrabold ">Invest Beyond</h2>
                <div className="body">
                    <div className="wrapper">
                        <div className="words">
                            <span>STOCKS</span>
                            <span>BONDS</span>
                            <span>FIXED DEPOSIT</span>
                            <span>MUTUAL FUNDS</span>
                            <span>STOCKS</span>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl py-2  text-white">Embark On A journey Into Alternative</h3>
                <h3 className="text-2xl py-2  text-white">Investments With Returns Starting</h3>
                <h3 className="text-2xl py-2  text-white">From 18%</h3>
                <button className="text-2xl py-4 p-5 text-white bg-green-600 rounded-md">Explore Opportunities</button>
            </div>
        </div>
    )
}
