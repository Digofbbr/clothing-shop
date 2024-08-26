
import { Button } from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import { Link } from 'react-router-dom';
import {filterProducts} from '../../featurers/slices/productsSlice'
import { useDispatch } from "react-redux";


export default function NavigateButtonsAlt({currentType}) {

  const buttons = ["Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"]

  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex justify-center items-center gap-2 py-4">
        {buttons.filter((current) => current !== currentType).map((item, index) => {
          return(
            <div key={index}>
              <Link to={`/filteredProducts/${item}`}>
                <Button onClick={() => dispatch(filterProducts(item))} color="blue-gray" size="sm" variant="text" ripple={true} className='hover:bg-gray-300 duration-300 ease-in-out'>{item}</Button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
