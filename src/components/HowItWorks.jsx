import img1 from '../assets/select-house.png';
import img2 from '../assets/Group 1166.svg'

const HowItWorks = () => {

  const data = [
    {icon: img1, name: 'Search Apartment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'},
    {icon: img2, name: 'Select Apartment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.', blueBg: true},
    {icon: img1, name: 'Confirm Apartment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'},
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-32 lg:py-14 mt-24 lg:mt-0">
      <h2 className="font-bold text-4xl">How it works</h2>
      <p className="font-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>

      <div className="flex items-center justify-between gap-10 flex-col lg:flex-row">
          {data.map((mainData) => (
        <div className={`py-10 rounded-lg px-4 ${mainData.blueBg ? 'bg-[#025595] text-white' : ''}`}>
            <img src={mainData.icon}/>
            <p className='font-semibold text-2xl mt-4'>{mainData.name}</p>
            <p className='text-[14px]'>{mainData.desc}</p>
        </div>
          ))}
      </div>

    </div>
  )
}

export default HowItWorks