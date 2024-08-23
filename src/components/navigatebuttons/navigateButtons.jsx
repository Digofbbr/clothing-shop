
import { Button } from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import { Link } from 'react-router-dom';
import {filterProducts} from '../../featurers/slices/productsSlice'
import { useDispatch } from "react-redux";


export default function NavigateButtons() {

  const buttons = ["Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"]


  const dispatch = useDispatch()

  return (
    <div>

      <div className="flex justify-center items-center gap-3 py-8">
        {buttons.map((item, index) => {
          return(
            <div key={index}>
              <Link to={`/filteredProducts/${item}`}>
                <Button onClick={() => dispatch(filterProducts(item))} color="gray" size="lg" variant="outlined" ripple={true} className='hover:bg-gray-300 duration-300 ease-in-out'>{item}</Button>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">Sales up to 50%</h3>
      </div>
      <div className="flex items-center py-4 justify-center">
        <img className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="clothes"/>
      </div>
    </div>
  )
}
