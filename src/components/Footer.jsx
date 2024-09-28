import logo from '../assets/logo.png';
import flora from '../assets/Flora.png';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const serviceData = [
    {name: 'Payment & Tax'},
    {name: 'Features'},
    {name: 'View Booking'},
    {name: 'Support'},
  ];

  const aboutData = [
    {name: 'About us'},
    {name: 'News'},
    {name: 'Pricing'},
    {name: 'New property'},
  ];

  const icons = [
    {icon: faFacebook},
    {icon: faTwitter},
    {icon: faLinkedin},
  ]

  return (
    <div className='flex justify-between items-center flex-col lg:flex-row px-4 sm:px-6 lg:px-32 pt-14'>
      <div>
        <div className='logo'>
          <img src={logo} alt="" />
          <img className='mt-4' src={flora} alt="" />
        </div>
        <p className='text-base w-[350.59px] mt-4 font-normal text-[#22222280]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem cupiditate ipsum dolore cumque?</p>
      </div>

      <div className="service-about flex justify-center items-center gap-20 mt-6 lg:mt-0">
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>Service</p>
            {serviceData.map((data) => (
                <a className=''>{data.name}</a>
            ))}
        </div>
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>About</p>
            {aboutData.map((data) => (
                <a className=''>{data.name}</a>
            ))}
        </div>
      </div>

      <div className='location mt-[25px]'>
      <p className='font-bold text-xl'>Our Location</p>
      <p className='mt-4'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

      <div className='icons flex items-center gap-3 mt-5'>
       {icons.map((icon) => (
         <div className='bg-[#025595] w-12 h-12 rounded-[50%] flex justify-center items-center'> 
            <FontAwesomeIcon icon={icon.icon} color='white' size='lg'/>
         </div>
       ))}
      </div>

      </div>
      

    </div>
  )
}

export default Footer