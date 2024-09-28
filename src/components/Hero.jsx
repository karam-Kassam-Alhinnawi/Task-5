import heroImg from '../assets/header.png';
import { faCoins, faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const heroData = [
  {name: 'Location', desc: 'Ahmedabad, India', icon: faLocationDot},
  {name: 'Price', desc: '$1000 - $10,000', icon: faCoins},
  {name: 'Type Of Property', desc: 'Apartment', icon: faHouse},
]

const Hero = () => {
  return (
    <div className='bg-[#EFF8FF] pt-24 relative flex justify-around items-center flex-col lg:flex-row'>
 
       <div className='relative z-[100] lg:pl-32 max-w-lg lg:max-w-[700px] pt-10 px-5 lg:px-0 lg:pt-0'>
         <h2 className='font-bold text-4xl md:text-6xl leading-[50px] lg:leading-[80px]'>Discover a place you will love to live</h2>
         
         <p className='mt-6 text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Imperdiet tempus felis vitae sit est quisque.</p>

         <div className='w-full lg:w-[860px] mt-10 h-64 md:h-24 rounded-2xl bg-[#FFFFFFCC] flex justify-around gap-10 items-start pl-10 lg:pl-0 md:items-center flex-col md:flex-row z-[100]'>
           {heroData.map((data) => (
            <div className='flex'>
               <FontAwesomeIcon  className='bg-[#b5d1e8] px-5 py-4 rounded-full' icon={data.icon} color='#025595'/>
               <div className='ml-3 text-[#222222]'>
                <p className='font-medium'>{data.name}</p>
                <p className='font-normal opacity-95'>{data.desc}</p>
               </div>
            </div>
           ))}
         </div>
       </div>

       <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
        <img src={heroImg} className='max-w-full h-auto lg:w-[850px]' alt="" />
       </div>
    </div>
  );
};

export default Hero;
