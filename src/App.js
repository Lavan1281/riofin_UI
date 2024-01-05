

import Cards from './component/Cards';
import Assets from './component/Assets';
import Banner from './component/Banner';

import Deposit from './component/Deposit';
import Navbar from './component/Navbar';

import Stats from './component/Stats';
import Nation from './component/Nation';
import  './style/style.css';
import Story from './component/Story';

import Invest from './component/Invest';

import HappyClients from './component/HappyClients';

function App() {
  return (
    <div className="App">
  
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Assets></Assets>
      <Cards></Cards>
      <Invest></Invest>
      <Deposit></Deposit>
    
      
      <Nation></Nation>
     <Story></Story>
     <HappyClients></HappyClients>
    
    
    
    </div>
  );
}

export default App;
