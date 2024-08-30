import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../../featurers/slices/wishListSlice'
import { singleProduct } from "../../featurers/slices/productsSlice";
import { Link } from 'react-router-dom'

const WishList = ({handleCloseWishList, isVisible}) => {
  
  const dispatch = useDispatch()
  const list = useSelector((state) => state.wish.wish)

  return (
    <div className={`fixed right-0 h-screen bg-white z-10 top-0 p-4 min-w-[250px] border overflow-y-auto border-gray-700 rounded-tl-[10px] rounded-bl-[10px] transform transition-transform duration-300 ${isVisible ? 'translate-x' : 'translate-x-full'}`}>
      <button className='absolute top-4 right-4' onClick={handleCloseWishList}>X</button>
      <h3>Wish List</h3>

      <div className='flex flex-col gap-3 pt-3'>
        {list.map(item => {
          return(
            <div key={item.id}>
              <Link to={`/filteredProducts/${item.category}/${item.id}`}>
              
                <div onClick={() => dispatch(singleProduct(item.id))} className='flex items-center justify-between hover:bg-gray-200 rounded-md'>
                  <img className='rounded-md h-[100px]' src={item.img} alt={item.name} />
                  <p className='text-xs'>{item.name}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WishList