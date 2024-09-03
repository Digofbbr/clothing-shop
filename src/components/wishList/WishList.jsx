import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../../featurers/slices/wishListSlice'
import { singleProduct } from "../../featurers/slices/productsSlice";
import { Link } from 'react-router-dom'

const WishList = ({handleCloseWishList, isVisible}) => {
  
  const dispatch = useDispatch()
  const list = useSelector((state) => state.wish.wish)

  function handleRemoveFromWishList(item_id){
    const confirm = window.confirm("Remove from wish list?")
    if (confirm){
      dispatch(removeFromWishList({id: item_id}))
    }
  }

  return (
    <div className={`fixed right-0 h-screen bg-white z-10 top-0 p-4 min-w-[250px] border overflow-y-auto border-gray-700 rounded-tl-[10px] rounded-bl-[10px] transform transition-transform duration-300 z-20 ${isVisible ? 'translate-x' : 'translate-x-full'}`}>
      <button className='absolute top-4 right-4' onClick={handleCloseWishList}>X</button>
      <h3>Wish List</h3>

      {list.length > 0 ? 
        <div className='flex flex-col gap-3 pt-3'>
          {list.map(item => {
            return(
              
              <div key={item.id}>
                <Link to={`/filteredProducts/${item.category}/${item.id}`}>
                
                  <div onClick={() => dispatch(singleProduct(item.id))} className='flex items-center justify-between hover:bg-gray-200 rounded-md relative'>
                    <img className='rounded-md h-[100px]' src={item.img} alt={item.name} />
                    <p className='text-xs'>{item.name}</p>
                    <button className='border border-red-500 text-xs text-red-100 bg-red-700 rounded-md absolute right-0 bottom-0 px-2 py-1' onClick={(event) => {
                      event.stopPropagation()
                      event.preventDefault()
                      handleRemoveFromWishList(item.id)}}>Remove</button>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        :
        <div className='pt-12 text-sm italic'>Your Wish List is empty, add products first.</div>
    
      }
    </div>
  )
}

export default WishList