import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Tooltip, Button } from "@material-tailwind/react"
import { useState } from "react"
import { addToCart } from "../../featurers/slices/cartSlice"
import { addToWishList, removeFromWishList } from "../../featurers/slices/wishListSlice"
import Navbar from "../navbar/Navbar"
import { FaHeart } from "react-icons/fa";

const SingleProduct = () => {

  const dispatch = useDispatch()

  const product = useSelector((state) => state.products.singleProduct)
  const {id, type} = useParams()
  const wishes = useSelector((state) => state.wish.wish)
  
  const foundWish = wishes.some((wish) => wish.id === id)
  
  const productSize = product[0].size ? product[0].size[0] : ""
  const productColor = product[0].color ? product[0].color[0] : ""

  const [size, setSize] = useState(productSize)
  const [color, setColor] = useState(productColor)
  return (
      
    <div>
      {product.filter((product) => product.id === id).map((item, index) => {
        
        return(
          <>
            <Navbar />
            <div key={index} className="flex justify-center items-center py-10 gap-[80px]">
              <div className="">
                <img className="h-[850px] max-w-[600px] rounded-lg" src={item.img} alt={item.name}/>
              </div>
              <div className="">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-bold tracking-normal leading-none pb-4">{item.name}</h5>
                  <p className="text-orange-700 text-xl font-bold tracking-normal leading-none pb-4">15% OFF</p>
                  <p className="text-gray-600 text-xl font-bold tracking-normal leading-none pb-4">{item.text}</p>
                  <div className="pb-4">
                    {item.size ? 
                      <div>
                        <label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                        <select value={size} onChange={(e) => setSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="sizes" id="sizes">
                          {item.size.map((size, index) => <option value={size} key={index}>{size}</option>)}
                        </select>
                      </div>
                      :
                      <div>
                        <label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                        <select disabled={true} value={size} onChange={(e) => setSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="sizes" id="sizes">
                          {item?.size?.map((size, index) => <option value={size} key={index}>{size}</option>)}
                        </select>
                      </div>          
                    }
                  </div>
                  <div className="pb-4">
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                    <select value={color} onChange={(e) => setColor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="color" id="color">
                      {item.color.map((color, index) => <option value={color} key={index}>{color}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center gap-10">
                    <Tooltip content="Add to cart" placement="bottom">
                      <Button onClick={() => dispatch(addToCart({id: item.id, price: item.price, amount: 1, totalPrice: item.price, name: item.name, size: size, color: color, img: item.img, text: item.text}))} color="gray" size="lg" variant="outlined" ripple={true}>Add to cart</Button>
                    </Tooltip>
                    
                    <Tooltip content={`${foundWish ? "Remove from wish list" : "Add to wish list"}`} placement="bottom">
                      <div>
                        <FaHeart className={`cursor-pointer text-xl ${foundWish ? "text-red-500" : ""}`} onClick={() => foundWish ? dispatch(removeFromWishList({id: item.id})) : dispatch(addToWishList({id: item.id, name: item.name, img: item.img, text: item.text, category: type}))} />
                      </div>
                    </Tooltip>
                  </div>
                  
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default SingleProduct