import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../assets/Villa1.png';
import img2 from '../assets/Villa2.png';
import img3 from '../assets/Villa3.png';
import img4 from '../assets/Villa4.png';
import img5 from '../assets/Villa5.png';
import img6 from '../assets/Villa6.png';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';

const Cards = () => {
  const cardInfo = [
    {img: img1, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
    {img: img2, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
    {img: img3, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
    {img: img4, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
    {img: img5, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
    {img: img6, title: 'Luxury Apartment in California', location: '1901 Thornridge Cir. Shiloh, Hawaii 81063', price: '$300000'},
  ]
  return (
    <div className="px-2 lg:px-32 pt-20">
        <h2 className="text-4xl font-bold">Most Trending</h2>
        <p className="text-base font-normal mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestiae.</p>

        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {cardInfo.map((card) => (
                <div className='card shadow-xl flex flex-col items-center rounded-2xl h-[450px] w-[382px]'>
                   <img className='w-[342px] mt-5' src={card.img} alt="" />
                   <div className='mt-4 -ml-4'>
                    <p className='font-semibold text-lg text-[#025595]'>{card.price}</p>
                    <p className='font-semibold text-lg text-[#222222] w-48'>{card.title}</p>
                    <p className='mt-8'><FontAwesomeIcon icon={faLocationPin}/> {card.location}</p>
                   </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Cards