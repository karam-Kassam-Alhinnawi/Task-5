import { useState } from "react"
import img1 from '../assets/Image01.jpg';
import img2 from '../assets/Image02.jpg';
import img3 from '../assets/Image03.jpg';

const BestDeal = () => {
  const [selectedButtonType, setSelectedButtonType] = useState('Residential Property');

  const handleButtonClick = (type) => {
    setSelectedButtonType(type)
  }

  const buttons = ["Residential Property", "Commercial Property", "Agriculture Property", "Industrial Property"];

  const data = [
    {img: img1, type: 'Commercial Property'},
    {img: img2, type: 'Agriculture Property'},
    {img: img3, type: 'Industrial Property'},
  ]

  return (
    <div className="px-2 lg:px-32 pt-20">
    <h2 className="text-4xl font-bold">Best Real Estate Deals</h2>
    <p className="text-base font-normal mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestiae.</p>

    <div className="buttons flex overflow-y-scroll gap-4 items-start pt-10">
      {buttons.map((button, index) => (
          <button className="mr-10 text-[#025595] font-semibold border-b-[4px] border-[#025595]" onClick={() => handleButtonClick(button)}>{button}</button>
      ))}
    </div>

    <div className="">
    <div className="flex flex-col lg:flex-row mt-5 gap-10">
      {selectedButtonType === 'Residential Property' ?  data.map((img) => (
        <img src={img.img} className='relative'/>
      )) : data.filter((item) => item.type === selectedButtonType).map((item, index) => (
        <img src={item.img} className='relative'/>
      ))
    
    }
    </div>
    </div>


    </div>
  )
}

export default BestDeal