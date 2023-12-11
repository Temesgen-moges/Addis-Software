

import Experience from './Experience';
import Footer from './Footer';

import Hero from './Hero';
import Card from './Card';


function One() {
  return (
   <div>
       <div className='text-white bg-[#081730]'>
       {/* <Header/> */}
       </div>
      
       <div className='text-white bg-[#020917]'>
       <Hero/>
       <Experience/>
       <Card/>
       {/* <Footer/> */}
       </div>
      
      
   </div>
  )
}


export default One;
